import { useEffect, useState } from "react";

let cronstrueModule: any = null;

const loadCronstrue = async () => {
  if (!cronstrueModule) {
    const cronstrueImport = await import("cronstrue");
    cronstrueModule = cronstrueImport.default;
  }
  return cronstrueModule;
};

const SimpleExpressionDisplay = ({ expression }: { expression: string }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    loadCronstrue().then((cronstrue) => {
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
