"use client";

import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import ExpressionDisplay from "./ExpressionDisplay";
import { Spinner } from "./spinner";

const EnglishToCron = () => {
  const [userInput, setUserInput] = useState("");
  const [responseExpression, setResponseExpression] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e): void => {
    console.log("e", e.target.value);
    setUserInput(e.target.value);
  };

  const getData = async () => {
    if (userInput === null || userInput === "") {
      return "No input present";
    }
    setLoading(true);
    const requestData = {
      textIp: userInput,
    };
    const fetchData = await fetch("/api/generateCron", {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: { "Content-Type": "application/json" },
    });
    const responseJson = await fetchData.json();
    setLoading(false);
    setResponseExpression(
      responseJson?.candidates?.[0]?.content?.parts?.[0]?.text,
    );
  };

  return (
    <div className="">
      English to Cron Mode
      <input data-slot="input" />
      <div className="flex gap-2 my-4 flex-col md:flex-row">
        <Input onChange={handleInputChange} className="h-10" />
        <Button
          className="p-2! h-10"
          onClick={getData}
          disabled={userInput === "" || userInput === null}
        >
          Get Result {loading && <Spinner />}
        </Button>
      </div>
      <ExpressionDisplay expression={responseExpression} />
    </div>
  );
};

export default EnglishToCron;
