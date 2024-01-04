"use client";
import CalculatorContent from "@/components/calculator/calculator_content";
import InputFieldForCalculator from "@/components/calculator/InputFieldForCalculator";
import { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleClickButton = (event) => {
    if (event.target.innerText === "c") {
      setDisplayValue("");
    } else if (event.target.innerText === "=") {
      setDisplayValue(eval(displayValue));
    } else if (event.target.innerText === "del") {
      const newDisplayValue = displayValue.slice(0, -1);
      setDisplayValue(newDisplayValue);
    } else {
      const newDisplayValue = displayValue + event.target.innerText;
      setDisplayValue(newDisplayValue);
    }
  };

  return (
    <div className="p-10 m-10">
      <InputFieldForCalculator displayValue={displayValue} />

      <CalculatorContent handleClickButton={handleClickButton} />
    </div>
  );
};

export default Calculator;
