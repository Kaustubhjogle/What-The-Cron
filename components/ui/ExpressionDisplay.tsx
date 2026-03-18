import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ExpressionDisplay = ({ expression }: { expression: string }) => {
  return (
    <div className="flex gap-4 justify-center flex-col md:flex-row">
      <Label htmlFor="terms">Expression</Label>
      <Input defaultValue={expression} className="text-sm! tracking-[0.7rem] text-center w-full md:tracking-[2rem] md:text-2xl! h-10"/>
    </div>
  );
};

export default ExpressionDisplay;
