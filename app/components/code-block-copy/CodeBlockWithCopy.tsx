"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  className?: string;
};

export const CodeBlockWithCopy = ({ code, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // reset after 1.5s
  };

  return (
    <div className={cn("relative bg-muted rounded-md p-4 border text-sm font-mono", className)}>
      <pre className="whitespace-pre-wrap wrap-break-words">{code}</pre>
      <Button onClick={handleCopy} variant="ghost" size="icon" className="absolute top-2 right-2">
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  );
};
