import { useState, useEffect, useRef, useCallback } from 'react';
import { getCommandOutput, COMMANDS } from '@/lib/terminalCommands';

interface OutputLine {
  id: number;
  content: string;
  type: 'output' | 'command' | 'error' | 'system';
}

interface TerminalProps {
  onBootComplete?: () => void;
}

const BOOT_SEQUENCE = [
  { text: 'Booting Secure System v1.3.7...', delay: 500 },
  { text: 'Loading kernel modules........[OK]', delay: 800 },
  { text: 'Mounting encrypted filesystem.[OK]', delay: 600 },
  { text: 'Initializing network stack....[OK]', delay: 700 },
  { text: 'Authenticating user...........[GUEST]', delay: 900 },
  { text: 'Access granted.', delay: 400 },
  { text: '', delay: 200 },
];

const ASCII_BANNER = `
 ██████╗██╗  ██╗ ██████╗ ██╗   ██╗ ██████╗  █████╗ ██╗     ███████╗
██╔════╝██║  ██║██╔═══██╗██║   ██║██╔════╝ ██╔══██╗██║     ██╔════╝
██║     ███████║██║   ██║██║   ██║██║  ███╗███████║██║     █████╗  
██║     ██╔══██║██║   ██║██║   ██║██║   ██║██╔══██║██║     ██╔══╝  
╚██████╗██║  ██║╚██████╔╝╚██████╔╝╚██████╔╝██║  ██║███████╗███████╗
 ╚═════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
`;

const WELCOME_MESSAGE = `
Welcome to SECURE TERMINAL
═══════════════════════════════════════════════════════════════════
System: ADITYA-WORKSTATION          IP: 192.168.1.337
User:   guest@secure-term           Session: ${Date.now().toString(16).toUpperCase()}
═══════════════════════════════════════════════════════════════════

Type "help" to see available commands.
`;

export default function Terminal({ onBootComplete }: TerminalProps) {
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [bootIndex, setBootIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineIdRef = useRef(0);

  const addOutputLine = useCallback((content: string, type: OutputLine['type'] = 'output') => {
    lineIdRef.current += 1;
    setOutput(prev => [...prev, { id: lineIdRef.current, content, type }]);
  }, []);

  const typeText = useCallback(async (text: string, type: OutputLine['type'] = 'output') => {
    setIsTyping(true);
    let displayed = '';
    lineIdRef.current += 1;
    const lineId = lineIdRef.current;
    
    setOutput(prev => [...prev, { id: lineId, content: '', type }]);
    
    for (let i = 0; i < text.length; i++) {
      displayed += text[i];
      const finalDisplayed = displayed;
      setOutput(prev => 
        prev.map(line => 
          line.id === lineId ? { ...line, content: finalDisplayed } : line
        )
      );
      await new Promise(resolve => setTimeout(resolve, 15 + Math.random() * 25));
    }
    setIsTyping(false);
  }, []);

  // Boot sequence
  useEffect(() => {
    if (!isBooting) return;

    const runBootSequence = async () => {
      for (let i = 0; i < BOOT_SEQUENCE.length; i++) {
        await new Promise(resolve => setTimeout(resolve, BOOT_SEQUENCE[i].delay));
        if (BOOT_SEQUENCE[i].text) {
          await typeText(BOOT_SEQUENCE[i].text, 'system');
        }
        setBootIndex(i + 1);
      }
      
      // Add ASCII banner
      addOutputLine(ASCII_BANNER, 'output');
      
      // Add welcome message
      WELCOME_MESSAGE.split('\n').forEach(line => {
        addOutputLine(line, 'output');
      });
      
      setIsBooting(false);
      onBootComplete?.();
    };

    runBootSequence();
  }, []);

  // Scroll to bottom on new output
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [output]);

  // Focus input on click
  const handleContainerClick = () => {
    if (!isBooting) {
      inputRef.current?.focus();
    }
  };

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add command to history
    if (trimmedCmd) {
      setCommandHistory(prev => [...prev, trimmedCmd]);
      setHistoryIndex(-1);
    }
    
    // Show the command in output
    addOutputLine(`guest@secure-term:~$ ${cmd}`, 'command');
    
    if (!trimmedCmd) {
      return;
    }

    if (trimmedCmd === 'clear') {
      setOutput([]);
      return;
    }

    if (trimmedCmd === 'exit') {
      addOutputLine('', 'output');
      addOutputLine('Disconnecting from secure terminal...', 'system');
      addOutputLine('Connection closed.', 'system');
      addOutputLine('', 'output');
      addOutputLine('[ SESSION TERMINATED ]', 'error');
      setIsBooting(true);
      setTimeout(() => {
        setOutput([]);
        setIsBooting(true);
        setBootIndex(0);
        // Re-run boot
        window.location.reload();
      }, 2000);
      return;
    }

    const commandOutput = getCommandOutput(trimmedCmd);
    
    if (commandOutput.isError) {
      addOutputLine(commandOutput.content, 'error');
    } else {
      commandOutput.content.split('\n').forEach(line => {
        addOutputLine(line, 'output');
      });
    }
    
    addOutputLine('', 'output');
  }, [addOutputLine]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isBooting || isTyping) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete
      const matches = COMMANDS.filter(cmd => cmd.startsWith(currentInput.toLowerCase()));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      } else if (matches.length > 1) {
        addOutputLine(`guest@secure-term:~$ ${currentInput}`, 'command');
        addOutputLine(matches.join('  '), 'output');
        addOutputLine('', 'output');
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setOutput([]);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="terminal-container crt-screen bg-background text-foreground terminal-glow cursor-text"
      onClick={handleContainerClick}
    >
      {/* Scanlines overlay */}
      <div className="scanlines" />
      
      {/* Output */}
      <div className="space-y-0">
        {output.map((line) => (
          <div 
            key={line.id} 
            className={`whitespace-pre-wrap break-all ${
              line.type === 'error' ? 'terminal-error' : 
              line.type === 'system' ? 'terminal-system' : 
              line.type === 'command' ? 'text-secondary' : ''
            } ${line.content.includes('╔') || line.content.includes('║') || line.content.includes('╚') || line.content.includes('═') || line.content.includes('█') ? 'ascii-art' : ''}`}
          >
            {line.content}
          </div>
        ))}
      </div>
      
      {/* Command Input */}
      {!isBooting && (
        <div className="command-line mt-2">
          <span className="prompt">guest@secure-term:~$</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input w-full"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            <span className="absolute left-0 top-0 pointer-events-none">
              {currentInput}
              <span className="cursor-blink">█</span>
            </span>
          </div>
        </div>
      )}
      
      {/* Boot cursor */}
      {isBooting && !isTyping && (
        <div className="mt-2">
          <span className="cursor-blink">█</span>
        </div>
      )}
    </div>
  );
}
