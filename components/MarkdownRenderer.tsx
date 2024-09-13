import React from 'react';
import MarkdownIt from 'markdown-it';

interface MarkdownRendererProps {
  content: string;
}

const md = new MarkdownIt();

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const htmlContent = md.render(content);

  return (
    <div
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;
