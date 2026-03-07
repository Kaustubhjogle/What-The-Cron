import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ExpressionDisplay = ({ expression }: { expression: string }) => {
  return (
    <div className="flex gap-4">
      <Label htmlFor="terms">Expression</Label>
      <Input id="last-name" value={expression} />
    </div>
  );
};

export default ExpressionDisplay;
