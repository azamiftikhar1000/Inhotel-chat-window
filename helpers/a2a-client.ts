/**
 * A2A Service Client
 * JSON-RPC 2.0 over SSE for real-time chat streaming
 */

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatRequest {
  message: string;
  assistant_id: string; // inbox_id
  session_id?: string;
  context_id?: string; // A2A contextId for session continuity
  history?: ChatMessage[];
}

/**
 * Build JSON-RPC 2.0 payload matching FlowiseAgentExecutor expectations
 */
function buildJsonRpcPayload(request: ChatRequest): object {
  const messageId =
    typeof crypto !== 'undefined' &&
    typeof (crypto as any).randomUUID === 'function'
      ? (crypto as any).randomUUID()
      : `msg-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const rpcId = String(Date.now());

  // Convert history to A2A format
  const sessionHistory = (request.history || []).map((m, idx) => ({
    messageId:
      typeof crypto !== 'undefined' &&
      typeof (crypto as any).randomUUID === 'function'
        ? (crypto as any).randomUUID()
        : `h-${Date.now()}-${idx}-${Math.random().toString(16).slice(2)}`,
    role: m.role === 'assistant' ? 'agent' : 'user',
    parts: [{kind: 'text', text: m.content}],
  }));

  return {
    jsonrpc: '2.0',
    id: rpcId,
    method: 'message/stream',
    params: {
      stream: true,
      message: {
        messageId,
        contextId: request.context_id, // Include contextId in message object
        role: 'user',
        parts: [{kind: 'text', text: request.message}],
        history: sessionHistory,
      },
      metadata: {
        sourceChannel: 'web.embed',
        sourceTrigger: 'chat_window',
        sessionId: request.session_id,
        flowProfile: 'papercups',
      },
    },
  };
}

/**
 * Check if text is a system message that should be filtered out
 */
function isSystemMessage(text: string): boolean {
  const systemPhrases = [
    'running the flow',
    'processing',
    'thinking',
    'loading',
    'starting',
    'initializing',
  ];
  const lower = text.toLowerCase();
  return systemPhrases.some((p) => lower.includes(p));
}

/**
 * Extract text from A2A response parts
 */
function extractTextFromParts(parts: any[]): string {
  if (!Array.isArray(parts)) return '';
  return parts
    .map((p) => p?.text || p?.content || '')
    .filter(Boolean)
    .join('');
}

/**
 * Extract assistant text from various JSON-RPC response formats
 */
function extractAssistantText(data: any): string {
  try {
    const kind = data?.result?.kind || data?.kind;

    // Status update with message parts
    if (kind === 'status-update') {
      const msg = data?.result?.status?.message;
      const txt = extractTextFromParts(msg?.parts);
      if (txt) return txt;
    }

    // Artifact update (usually final response)
    if (kind === 'artifact-update') {
      const arts = data?.result?.artifact?.parts || data?.artifact?.parts || [];
      const txt = extractTextFromParts(arts);
      if (txt) return txt;
    }

    // Direct response text
    const t1 = data?.result?.response?.text;
    if (typeof t1 === 'string' && t1.trim()) return t1;

    // Response with message parts
    const parts2 = data?.result?.response?.message?.parts;
    if (Array.isArray(parts2)) {
      const txt = extractTextFromParts(parts2).trim();
      if (txt) return txt;
    }

    // Artifacts array
    const artsRes = Array.isArray(data?.result?.artifacts)
      ? data.result.artifacts
      : [];
    const resArt =
      artsRes.find((a: any) => (a?.name || '').toLowerCase() === 'result') ||
      artsRes[artsRes.length - 1];
    if (resArt && Array.isArray(resArt.parts)) {
      const txt = extractTextFromParts(resArt.parts).trim();
      if (txt) return txt;
    }

    // History-based response
    const hist = Array.isArray(data?.result?.history)
      ? data.result.history
      : [];
    if (hist.length) {
      const txt = hist
        .filter((m: any) => m?.role === 'agent' || m?.role === 'assistant')
        .flatMap((m: any) => (Array.isArray(m?.parts) ? m.parts : []))
        .map((p: any) => p?.text || p?.content || '')
        .filter(Boolean)
        .join('')
        .trim();
      if (txt) return txt;
    }

    // Raw string
    if (typeof data === 'string' && data.trim()) return data;
  } catch {
    // Fall through
  }
  return '';
}

export type StreamCallback = (text: string) => void;
export type CompleteCallback = (fullText: string, contextId?: string) => void;
export type ErrorCallback = (error: Error) => void;

/**
 * Stream a message to the A2A endpoint using SSE
 */
export async function streamMessage(
  baseUrl: string,
  request: ChatRequest,
  onToken: StreamCallback,
  onComplete: CompleteCallback,
  onError: ErrorCallback
): Promise<void> {
  const payload = buildJsonRpcPayload(request);

  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify(payload),
      mode: 'cors',
      credentials: 'omit',
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    // Check if we got SSE or regular JSON
    const contentType = (
      response.headers.get('content-type') || ''
    ).toLowerCase();
    if (!contentType.includes('text/event-stream')) {
      // Non-streaming response (fallback)
      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        json = {result: {response: {text: text}}};
      }
      const result = extractAssistantText(json);
      onToken(result);
      onComplete(result);
      return;
    }

    // Handle SSE stream
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No response body available');
    }

    const decoder = new TextDecoder();
    let buffer = '';
    let accumulated = '';
    let extractedContextId: string | undefined;

    while (true) {
      const {value, done} = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, {stream: true});

      // Parse SSE events (separated by double newlines)
      let idx;
      while ((idx = buffer.search(/\r?\n\r?\n/)) >= 0) {
        const sepLen = /\r\n\r\n/.test(buffer.slice(idx, idx + 4)) ? 4 : 2;
        const chunk = buffer.slice(0, idx);
        buffer = buffer.slice(idx + sepLen);

        // Extract data lines
        const lines = chunk.split(/\r?\n/);
        const dataLines = lines
          .filter((l) => l.startsWith('data:'))
          .map((l) => l.slice(5).trim());

        if (!dataLines.length) continue;

        const dataStr = dataLines.join('\n');
        if (!dataStr || dataStr === '[DONE]' || dataStr === '"[DONE]"')
          continue;

        let json;
        try {
          json = JSON.parse(dataStr);
        } catch {
          json = {result: {response: {text: dataStr}}};
        }

        // Extract contextId from response (present in all event types)
        if (json?.result?.contextId && !extractedContextId) {
          extractedContextId = json.result.contextId;
        }

        const kind = json?.result?.kind || json?.kind || '';

        // Filter task submission events
        if (kind === 'task') {
          const state = json?.result?.status?.state;
          if (state === 'submitted') continue;
        }

        // Handle status updates (streaming tokens)
        if (kind === 'status-update') {
          const state = json?.result?.status?.state;
          if (state === 'completed' || state === 'submitted') continue;

          const text = extractAssistantText(json);
          if (text && !isSystemMessage(text)) {
            accumulated += text;
            onToken(text);
          }
          continue;
        }

        // Handle artifact updates (often final complete response)
        if (kind === 'artifact-update') {
          const text = extractAssistantText(json);
          if (text) {
            accumulated = text; // Replace with full artifact
            onToken(text);
          }
          continue;
        }

        // Handle any other response with text
        const fallbackText = extractAssistantText(json);
        if (fallbackText) {
          accumulated += fallbackText;
          onToken(fallbackText);
        }
      }
    }

    onComplete(accumulated, extractedContextId);
  } catch (error) {
    onError(error instanceof Error ? error : new Error(String(error)));
  }
}

/**
 * Send a message without streaming (simple POST)
 */
export async function sendMessage(
  baseUrl: string,
  request: ChatRequest
): Promise<string> {
  const payload = buildJsonRpcPayload(request);

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
    mode: 'cors',
    credentials: 'omit',
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    throw new Error(`API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return extractAssistantText(data);
}
