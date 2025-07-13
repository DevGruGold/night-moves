import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  children: ReactNode;
  completed?: boolean;
}

export const StepCard = ({ stepNumber, title, description, children, completed = false }: StepCardProps) => {
  return (
    <Card className={`
      p-8 mb-6 bg-gradient-to-br from-card to-card/50 border border-border/50
      backdrop-blur-sm transition-all duration-500 animate-fade-in-up
      ${completed ? 'ring-2 ring-success-green' : ''}
    `}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`
          w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
          ${completed 
            ? 'bg-success-green text-white' 
            : 'bg-gradient-to-r from-night-blue to-night-purple text-white'
          }
        `}>
          {completed ? '✓' : stepNumber}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
      </div>
      {children}
    </Card>
  );
};