import React from 'react';

interface TerminalOutputProps {
  output: string;
}

export default function TerminalOutput({ output }: TerminalOutputProps) {
  return (
    <div className="whitespace-pre-wrap text-gray-300 my-2">
      {output}
    </div>
  );
}