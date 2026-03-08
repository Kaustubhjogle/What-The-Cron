const PRESETS = [
  { label: "Every Minute", cron: "* * * * *" },
  { label: "Hourly", cron: "0 * * * *" },
  { label: "Daily 9AM", cron: "0 9 * * *" },
  { label: "Weekdays", cron: "0 9 * * 1-5" },
  { label: "Midnight", cron: "0 0 * * *" },
  { label: "Every Sunday", cron: "0 10 * * 0" },
];

type Fields = {
  minute: string;
  hour: string;
  dom: string;
  month: string;
  dow: string;
};

const PresetButtons = ({ onSelect }: { onSelect: (f: Fields) => void }) => {
  return (
    <div className="presets-row">
      <span className="presets-label">Presets:</span>
      <div className="presets-list">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            className="preset-btn"
            onClick={() => {
              const [minute, hour, dom, month, dow] = p.cron.split(" ");
              onSelect({ minute, hour, dom, month, dow });
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PresetButtons;
