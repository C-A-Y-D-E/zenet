import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { executeCommand } from '../utils/commands';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';
import TerminalHeader from './TerminalHeader';
import DexToolLogo from '../assets/dextool.png';

export default function Terminal() {
  const [history, setHistory] = useState<
    Array<{ command: string; output: string }>
  >([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (command: string) => {
    const output = executeCommand(command.toLowerCase());
    setHistory([...history, { command, output }]);
    setCurrentCommand('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <TerminalHeader />

        <div className="bg-zinc-900 rounded-lg p-4 shadow-lg border border-white/10">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <TerminalIcon className="w-4 h-4" />
            <span className="text-sm">ZENET Terminal</span>
          </div>

          <div className="space-y-2">
            {history.map((entry, index) => (
              <div key={index}>
                <TerminalPrompt command={entry.command} />
                <TerminalOutput output={entry.output} />
              </div>
            ))}
            <TerminalPrompt
              command={currentCommand}
              setCommand={setCurrentCommand}
              onSubmit={handleCommand}
              showCursor
            />
          </div>
          <div ref={bottomRef} />
        </div>

        <div className="mt-4 text-center text-sm text-white/60">
          Type 'help' to see available commands
        </div>

        <div className="mt-5">
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/JB1LbbFcot8ur4NA8rkSDMMtqGfNRiERxqaUXYn34Rz6?t=1733743188188"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DexToolLogo} className="mx-auto w-24" />
          </a>
        </div>
      </div>
    </div>
  );
}
