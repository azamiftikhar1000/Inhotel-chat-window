/**
 * Chat Storage Helpers
 * localStorage-based conversation persistence
 */

const HISTORY_KEY = 'inhotel_chat_history';
const CONTEXT_KEY = 'inhotel_context_id';
const MAX_MESSAGES = 50;
const EXPIRY_HOURS = 24;

export interface StoredMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface StoredData {
  messages: StoredMessage[];
  sessionId: string;
  contextId?: string; // A2A context ID for session continuity
  timestamp: number;
}

/**
 * Generate a unique session ID
 */
function generateSessionId(): string {
  if (
    typeof crypto !== 'undefined' &&
    typeof (crypto as any).randomUUID === 'function'
  ) {
    return (crypto as any).randomUUID();
  }
  return `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/**
 * Get storage key for a specific assistant
 */
function getStorageKey(assistantId: string): string {
  return `${HISTORY_KEY}_${assistantId}`;
}

/**
 * Get chat history for an assistant
 */
export function getChatHistory(assistantId: string): StoredMessage[] {
  try {
    const key = getStorageKey(assistantId);
    const raw = localStorage.getItem(key);
    if (!raw) return [];

    const data: StoredData = JSON.parse(raw);

    // Check expiry
    const hoursSinceStore = (Date.now() - data.timestamp) / (1000 * 60 * 60);
    if (hoursSinceStore > EXPIRY_HOURS) {
      localStorage.removeItem(key);
      return [];
    }

    return data.messages || [];
  } catch {
    return [];
  }
}

/**
 * Save chat history for an assistant
 */
export function saveChatHistory(
  assistantId: string,
  messages: StoredMessage[]
): void {
  try {
    const key = getStorageKey(assistantId);
    const existingSessionId = getSessionId(assistantId);

    const data: StoredData = {
      messages: messages.slice(-MAX_MESSAGES),
      sessionId: existingSessionId || generateSessionId(),
      timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save chat history:', error);
  }
}

/**
 * Get session ID for an assistant
 */
export function getSessionId(assistantId: string): string | null {
  try {
    const key = getStorageKey(assistantId);
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const data: StoredData = JSON.parse(raw);
    return data.sessionId || null;
  } catch {
    return null;
  }
}

/**
 * Set/update session ID for an assistant
 */
export function setSessionId(assistantId: string, sessionId: string): void {
  try {
    const key = getStorageKey(assistantId);
    const raw = localStorage.getItem(key);

    if (raw) {
      const data: StoredData = JSON.parse(raw);
      data.sessionId = sessionId;
      data.timestamp = Date.now();
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      const data: StoredData = {
        messages: [],
        sessionId,
        timestamp: Date.now(),
      };
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    console.warn('Failed to set session ID:', error);
  }
}

/**
 * Get A2A context ID for session continuity (stored in sessionStorage)
 */
export function getContextId(assistantId: string): string | null {
  try {
    const key = `${CONTEXT_KEY}_${assistantId}`;
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Set A2A context ID for session continuity (stored in sessionStorage)
 */
export function setContextId(assistantId: string, contextId: string): void {
  try {
    const key = `${CONTEXT_KEY}_${assistantId}`;
    sessionStorage.setItem(key, contextId);
  } catch (error) {
    console.warn('Failed to set context ID:', error);
  }
}

/**
 * Clear context ID for an assistant
 */
export function clearContextId(assistantId: string): void {
  try {
    const key = `${CONTEXT_KEY}_${assistantId}`;
    sessionStorage.removeItem(key);
  } catch (error) {
    console.warn('Failed to clear context ID:', error);
  }
}

/**
 * Clear chat session for an assistant
 */
export function clearChatSession(assistantId: string): void {
  try {
    const key = getStorageKey(assistantId);
    localStorage.removeItem(key);
    // Also clear context ID
    clearContextId(assistantId);
  } catch (error) {
    console.warn('Failed to clear chat session:', error);
  }
}

/**
 * Add a single message to history
 */
export function addMessageToHistory(
  assistantId: string,
  message: StoredMessage
): void {
  const history = getChatHistory(assistantId);
  history.push(message);
  saveChatHistory(assistantId, history);
}

/**
 * Get the last N messages from history
 */
export function getRecentHistory(
  assistantId: string,
  count: number = 20
): StoredMessage[] {
  const history = getChatHistory(assistantId);
  return history.slice(-count);
}
