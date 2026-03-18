import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./button";
import { useState } from "react";

const ExpressionDisplay = ({ expression }: { expression: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (): void => {
    navigator.clipboard.writeText(expression);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-4 justify-center flex-col md:flex-row">
      <Label htmlFor="terms">Expression</Label>
      <Input
        defaultValue={expression}
        className="text-sm! tracking-[0.7rem] text-center w-full md:tracking-[2rem] md:text-2xl! h-10"
      />
      <Button
        variant="outline"
        className="p-2! h-10 w-16 hover:bg-[#1a1a2e] hover:text-[#909098]"
        onClick={handleCopy}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
};

export default ExpressionDisplay;
