"use client";

import { useState, useEffect, useRef } from "react";

type Mode = "every" | "interval" | "specific";

type Props = {
  label: string;
  value: string;
  min: number;
  max: number;
  onChange: (val: string) => void;
  labels?: string[];
};

const ToggleButton = ({ label, value, min, max, onChange, labels }: Props) => {
  const [mode, setMode] = useState<Mode>("every");
  const [intervalVal, setIntervalVal] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);
  const isSyncingRef = useRef(false);

  useEffect(() => {
    isSyncingRef.current = true;
    if (value === "*") {
      setMode("every");
      setSelected([]);
      setIntervalVal(1);
    } else if (value.startsWith("*/")) {
      setMode("interval");
      setIntervalVal(Number(value.split("/")[1]));
    } else {
      setMode("specific");
      setSelected(value.split(",").map(Number));
    }
  }, [value]);

  // Compute output string and send to parent ONLY on user changes
  useEffect(() => {
    if (isSyncingRef.current) {
      isSyncingRef.current = false;
      return;
    }

    let output = "*";
    if (mode === "every") {
      output = "*";
    } else if (mode === "interval") {
      const safe = Math.max(1, Math.min(intervalVal, max));
      output = `*/${safe}`;
    } else {
      output =
        selected.length === 0
          ? "*"
          : [...selected].sort((a, b) => a - b).join(",");
    }
    onChange(output);
  }, [mode, intervalVal, selected, max]);

  const toggleSelected = (num: number) => {
    setSelected((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num],
    );
  };

  const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const modeLabel = (m: Mode) => {
    if (m === "every") return "Every";
    if (m === "interval") return "Interval";
    return "Specific";
  };

  return (
    <div className="field-toggle">
      <div className="field-header">
        <span className="field-label">{label}</span>
        <span className="field-value-badge">{value}</span>
      </div>

      {/* Mode Tabs */}
      <div className="mode-tabs">
        {(["every", "interval", "specific"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`mode-tab ${mode === m ? "active" : ""}`}
          >
            {modeLabel(m)}
          </button>
        ))}
      </div>

      {/* Every Mode */}
      {mode === "every" && (
        <div className="mode-content">
          <span className="every-label">Every {label.toLowerCase()}</span>
        </div>
      )}

      {/* Interval Mode */}
      {mode === "interval" && (
        <div className="mode-content interval-content">
          <span className="interval-text">Every</span>
          <input
            type="number"
            className="interval-input"
            min={1}
            max={max}
            value={intervalVal}
            onChange={(e) =>
              setIntervalVal(Math.max(1, Number(e.target.value)))
            }
          />
          <span className="interval-text">{label.toLowerCase()}(s)</span>
        </div>
      )}

      {/* Specific Mode */}
      {mode === "specific" && (
        <div className="mode-content">
          <div
            className="checkbox-grid"
            style={{
              gridTemplateColumns:
                numbers.length > 24
                  ? "repeat(10, 1fr)"
                  : numbers.length > 12
                    ? "repeat(6, 1fr)"
                    : "repeat(4, 1fr)",
            }}
          >
            {numbers.map((num) => {
              const displayLabel = labels ? labels[num - min] : String(num);
              const isChecked = selected.includes(num);
              return (
                <button
                  key={num}
                  onClick={() => toggleSelected(num)}
                  className={`checkbox-item ${isChecked ? "checked" : ""}`}
                  title={displayLabel}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>
          {selected.length > 0 && (
            <div className="selected-summary">
              {selected.length} selected:{" "}
              {[...selected]
                .sort((a, b) => a - b)
                .map((n) => (labels ? labels[n - min] : n))
                .join(", ")}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
