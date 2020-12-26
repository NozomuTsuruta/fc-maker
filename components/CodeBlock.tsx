import React from 'react';
import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface IProps {
  value?: string;
}

export const CodeBlock: FC<IProps> = ({ value }) => {
  return (
    <SyntaxHighlighter language="tsx" style={darcula}>
      {value}
    </SyntaxHighlighter>
  );
};