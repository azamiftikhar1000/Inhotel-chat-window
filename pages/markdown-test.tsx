import React from 'react';
import Head from 'next/head';
import {Box, Flex} from 'theme-ui';
import ChatMessageBody from '../components/ChatMessageBody';

const SAMPLE = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Regular paragraph with **bold**, *italic*, ***bold italic***, ~~strikethrough~~, and \`inline code\`. Here is a [link](https://example.com) and a bare autolink https://anthropic.com.

A line break (soft)
continues on the same paragraph via remark-breaks.

A horizontal rule follows.

---

> This is a blockquote.
> It supports **markdown** inside.
>> Nested quote.

## Lists

- Unordered item A
- Unordered item B
  - Nested item B.1
  - Nested item B.2
    - Deeper B.2.a
- Unordered item C

1. Ordered item one
2. Ordered item two
   1. Nested ordered
   2. Another nested
3. Ordered item three

## Task List (GFM)

- [x] Completed task
- [ ] Pending task
- [x] Another done
  - [ ] Nested pending

## Table (GFM)

| Feature        | Supported | Notes                    |
| -------------- | :-------: | ------------------------ |
| Tables         |     ✓     | via remark-gfm           |
| Task lists     |     ✓     | checkboxes render        |
| Strikethrough  |     ✓     | ~~like this~~            |
| Autolinks      |     ✓     | https://example.com      |
| Code highlight |     ✓     | prism syntax highlighter |

## Code Blocks

Inline: \`const x = 42;\`

\`\`\`js
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return { ok: true, count: 42 };
}
greet('world');
\`\`\`

\`\`\`python
def fib(n: int) -> int:
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print([fib(i) for i in range(10)])
\`\`\`

\`\`\`
Plain code block without language.
No syntax highlighting is applied.
\`\`\`

## Images

![Tiny pixel](https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Example.png/120px-Example.png)

## Emoji

Hello world 👋 🎉 🚀 — rendered via twemoji.

## Escaping & Special Chars

\\*not italic\\*, \\# not a heading, \\\`not code\\\`.

HTML entities: &amp; &lt; &gt; &copy;.

End.`;

export default function MarkdownTest() {
  return (
    <>
      <Head>
        <title>Markdown Test</title>
      </Head>
      <Box sx={{p: 4, maxWidth: 900, width: '100%'}}>
        <h2 style={{marginTop: 0}}>Bot bubble (light)</h2>
        <Flex sx={{justifyContent: 'flex-start'}}>
          <ChatMessageBody
            sx={{
              color: 'text',
              bg: 'rgb(245, 245, 245)',
              whiteSpace: 'pre-wrap',
              maxWidth: '100%',
            }}
            content={SAMPLE}
          />
        </Flex>

        <h2>User bubble (dark)</h2>
        <Flex sx={{justifyContent: 'flex-end'}}>
          <ChatMessageBody
            className="Text--white"
            sx={{
              color: 'background',
              bg: '#1f6feb',
              whiteSpace: 'pre-wrap',
              maxWidth: '100%',
            }}
            content={SAMPLE}
          />
        </Flex>
      </Box>
    </>
  );
}
