import React, { useEffect, useRef } from 'react';

interface TerminalPromptProps {
  command: string;
  setCommand?: (command: string) => void;
  onSubmit?: (command: string) => void;
  showCursor?: boolean;
}

export default function TerminalPrompt({ command, setCommand, onSubmit, showCursor }: TerminalPromptProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showCursor && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showCursor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && command.trim()) {
      onSubmit(command.trim());
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-white">zenet@user</span>
      <span className="text-white mx-1">:</span>
      <span className="text-gray-400">~</span>
      <span className="text-white mx-1">$</span>
      {showCursor ? (
        <form onSubmit={handleSubmit} className="flex-1">
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand?.(e.target.value)}
            className="bg-transparent outline-none flex-1 text-white w-full caret-white"
            autoFocus
          />
        </form>
      ) : (
        <span className="text-white">{command}</span>
      )}
    </div>
  );
}