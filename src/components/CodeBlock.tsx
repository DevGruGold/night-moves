interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = 'bash' }: CodeBlockProps) => {
  return (
    <div className="bg-muted rounded-xl p-6 mb-6 border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
          {language}
        </span>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <code className="text-foreground font-mono text-lg leading-relaxed block overflow-x-auto">
        {code}
      </code>
    </div>
  );
};