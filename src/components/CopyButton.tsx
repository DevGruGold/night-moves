import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface CopyButtonProps {
  text: string;
  stepNumber: number;
  variant?: 'primary' | 'secondary';
}

export const CopyButton = ({ text, stepNumber, variant = 'primary' }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied! 📋",
        description: `Step ${stepNumber} code is ready to paste`,
        duration: 2000,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      toast({
        title: "Copied! 📋",
        description: `Step ${stepNumber} code is ready to paste`,
        duration: 2000,
      });
      
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      className={`
        w-full h-20 text-lg font-bold rounded-2xl transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-money-gold to-money-gold-glow text-primary-foreground hover:shadow-glow hover:scale-105' 
          : 'bg-gradient-to-r from-night-blue to-night-purple text-white hover:shadow-step hover:scale-105'
        }
        ${copied ? 'animate-glow-pulse' : ''}
        flex items-center justify-center gap-3
      `}
    >
      {copied ? (
        <>
          <Check className="w-6 h-6" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-6 h-6" />
          Copy This Code
        </>
      )}
    </Button>
  );
};