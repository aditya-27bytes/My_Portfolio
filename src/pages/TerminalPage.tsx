import { useState } from 'react';
import Terminal from '@/components/Terminal';

export default function TerminalPage() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background crt-flicker">
      <Terminal onBootComplete={() => setBootComplete(true)} />
    </div>
  );
}
