import { useEffect, useState } from "react";

const SimpleExpressionDisplay = ({ expression }: { expression: string }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    import("cronstrue").then(({ default: cronstrue }) => {
      try {
        const result = cronstrue.toString(expression);
        setText(result);
      } catch {
        setText("Invalid expression");
      }
    });
  }, [expression]);

  return (
    <div className="explainer-panel">
      <span className="explainer-text">{text || "..."}</span>
    </div>
  );
};

export default SimpleExpressionDisplay;
