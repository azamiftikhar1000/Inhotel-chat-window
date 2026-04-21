import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import breaks from 'remark-breaks';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneLight} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {Box, Image} from 'theme-ui';
import {Attachment} from '../helpers/types';
import CustomEmoji from './CustomEmoji';

export const allowedNodeTypes: any[] = [
  'root',
  'text',
  'break',
  'paragraph',
  'emphasis',
  'strong',
  'blockquote',
  'delete',
  'link',
  'linkReference',
  'image',
  'imageReference',
  'list',
  'listItem',
  'heading',
  'inlineCode',
  'code',
  'thematicBreak',
  'table',
  'tableHead',
  'tableBody',
  'tableRow',
  'tableCell',
  'html',
  'virtualHtml',
];

const renderers: any = {
  text: (props: any) => (
    <CustomEmoji text={props.children} className="message-text" />
  ),
  image: (props: any) => (
    <img
      {...props}
      style={{maxWidth: '100%', maxHeight: 400, borderRadius: 4}}
    />
  ),
  link: (props: any) => (
    <a {...props} href={props.href} target="_blank" rel="noopener noreferrer" />
  ),
  table: (props: any) => (
    <div className="Text--markdown-table-wrap">
      <table className="Text--markdown-table">{props.children}</table>
    </div>
  ),
  thematicBreak: () => <hr className="Text--markdown-hr" />,
  inlineCode: (props: any) => (
    <code className="Text--markdown-inline-code">{props.children}</code>
  ),
  code: ({language, value}: any) => {
    const text = String(value || '');
    if (language) {
      return (
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          PreTag="div"
          customStyle={{
            margin: '8px 0',
            padding: '12px',
            borderRadius: 6,
            fontSize: 13,
            lineHeight: 1.45,
          }}
          codeTagProps={{style: {fontFamily: 'inherit'}}}
        >
          {text}
        </SyntaxHighlighter>
      );
    }
    return (
      <pre className="Text--markdown-pre">
        <code>{text}</code>
      </pre>
    );
  },
  listItem: (props: any) => {
    const {checked, children, tight, ordered, index, ...rest} = props;
    if (checked === true || checked === false) {
      return (
        <li
          {...rest}
          className="Text--markdown-task"
          style={{listStyle: 'none', marginLeft: -20}}
        >
          <input
            type="checkbox"
            checked={checked}
            readOnly
            style={{marginRight: 6}}
          />
          {children}
        </li>
      );
    }
    return <li {...rest}>{children}</li>;
  },
};

const ChatMessageAttachment = ({attachment}: {attachment: Attachment}) => {
  const {
    id,
    filename,
    file_url: fileUrl,
    content_type: contentType,
  } = attachment;
  const isImageFile = contentType.indexOf('image') !== -1;

  return (
    <Box key={id} mb={1}>
      <a
        href={fileUrl}
        style={{
          textDecoration: 'underline',
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isImageFile && false ? (
          <Box>
            <Image alt={filename} src={fileUrl} />
          </Box>
        ) : (
          filename
        )}
      </a>
    </Box>
  );
};

type ChatMessageBodyProps = {
  className?: string;
  content: string;
  sx?: object;
  attachments?: Array<Attachment>;
  thumbsup?: object;
  thumbsdown?: object;
};

const ChatMessageBody = ({
  className,
  content,
  sx,
  attachments = [],
  thumbsup,
  thumbsdown,
}: ChatMessageBodyProps) => {
  const parsedSx = Object.assign(
    {
      px: '14px',
      py: 2,
      borderRadius: 4,
      maxWidth: '80%',
      p: {mb: 0},
      ul: {my: 2},
      ol: {my: 2},
      blockquote: {
        px: 2,
        borderLeft: '3px solid',
        mb: 0,
      },
    },
    sx
  );

  return (
    <Box sx={parsedSx}>
      <ReactMarkdown
        className={`Text--markdown ${className || ''}`}
        source={content}
        allowedTypes={allowedNodeTypes}
        renderers={renderers}
        plugins={[gfm, breaks]}
      />
      {attachments && attachments.length > 0 && (
        <Box mt={2} className={`Text--markdown ${className || ''}`}>
          {attachments.map((attachment) => {
            return (
              <ChatMessageAttachment
                key={attachment.id}
                attachment={attachment}
              />
            );
          })}
        </Box>
      )}
      {thumbsup}
      {thumbsdown}
    </Box>
  );
};

export default ChatMessageBody;
