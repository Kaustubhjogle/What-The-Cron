"use client";

import ExpressionDisplay from "./ExpressionDisplay";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import "./CronBuilder.css";
import PresetButtons from "./PresetButtons";
import SimpleExpressionDisplay from "./SimpleExpressionDisplay";
import EnglishToCron from "./EnglishToCron";
import { Button } from "./button";

type Fields = {
  minute: string;
  hour: string;
  dom: string;
  month: string;
  dow: string;
};

const CronBuilder = () => {
  const [mainMode, setMainMode] = useState(true);
  const [fields, setFields] = useState<Fields>({
    minute: "*",
    hour: "*",
    dom: "*",
    month: "*",
    dow: "*",
  });

  const expression = `${fields.minute} ${fields.hour} ${fields.dom} ${fields.month} ${fields.dow}`;

  const updateField = (key: keyof Fields) => (val: string) => {
    setFields((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <div className="mt-20 cron-root">
        <Button
          className="p-4! mb-2 h-10"
          onClick={() => setMainMode(!mainMode)}
        >
          {!mainMode ? "Main Mode" : "English to Crone Mode"}
        </Button>
        {mainMode ? (
          <>
            <ExpressionDisplay expression={expression} />
            <div>
              <SimpleExpressionDisplay expression={expression} />
            </div>
            <PresetButtons onSelect={setFields} />
            <div className="fields-grid">
              <ToggleButton
                label="Minute"
                value={fields.minute}
                min={0}
                max={59}
                onChange={updateField("minute")}
              />
              <ToggleButton
                label="Hour"
                value={fields.hour}
                min={0}
                max={23}
                onChange={updateField("hour")}
              />
              <ToggleButton
                label="Day of Month"
                value={fields.dom}
                min={1}
                max={31}
                onChange={updateField("dom")}
              />
              <ToggleButton
                label="Month"
                value={fields.month}
                min={1}
                max={12}
                labels={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ]}
                onChange={updateField("month")}
              />
              <ToggleButton
                label="Day of Week"
                value={fields.dow}
                min={0}
                max={6}
                labels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
                onChange={updateField("dow")}
              />
            </div>
          </>
        ) : (
          <div className="w-80 md:w-156">
            <EnglishToCron />
          </div>
        )}
      </div>
    </>
  );
};

export default CronBuilder;
