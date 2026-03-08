import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ExpressionDisplay = ({ expression }: { expression: string }) => {
  return (
    <div className="flex gap-4 justify-center">
      <Label htmlFor="terms">Expression</Label>
      <Input defaultValue={expression} className="text-2xl! text-center w-full tracking-[2rem]"/>
    </div>
  );
};

export default ExpressionDisplay;
