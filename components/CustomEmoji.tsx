import React from 'react';
import twemoji from 'twemoji';

interface CustomEmojiProps {
  text: string;
  className?: string;
}

export const CustomEmoji: React.FC<CustomEmojiProps> = ({
  text,
  className = '',
}) => {
  const processedHtml = twemoji.parse(text, {
    folder: 'svg',
    ext: '.svg',
    className: 'emoji-icon',
    base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
  });

  return (
    <span
      className={`emoji-wrapper ${className}`}
      dangerouslySetInnerHTML={{__html: processedHtml}}
    />
  );
};

export default CustomEmoji;
