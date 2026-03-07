"use client";

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ExpressionDisplay from "./ExpressionDisplay";
import { useState } from "react";
import SimpleExpressionDisplay from "./SimpleExpressionDisplay";

const CronBuilder = () => {
  const [fields, setFields] = useState({
    minute: "*",
    hour: "*",
    dom: "*",
    month: "*",
    dow: "*",
  });

  const expression = `${fields.minute} ${fields.hour} ${fields.dom} ${fields.month} ${fields.dow}`;

  return (
    <>
      <div className="mt-20">
        <FieldGroup className="grid max-w-sm grid-cols-5 w-100">
          <Field>
            <Input id="first-name" placeholder="Min" />
          </Field>
          <Field>
            <Input id="last-name" placeholder="Hr" />
          </Field>
          <Field>
            <Input id="last-name" placeholder="DOM" />
          </Field>
          <Field>
            <Input id="last-name" placeholder="Mo" />
          </Field>
          <Field>
            <Input id="last-name" placeholder="DOW" />
          </Field>
        </FieldGroup>
      </div>

      <div className="mt-15">
        <ExpressionDisplay expression={expression} />
      </div>

      <div className="mt-15">
        <SimpleExpressionDisplay expression={expression} />
      </div>
    </>
  );
};

export default CronBuilder;
