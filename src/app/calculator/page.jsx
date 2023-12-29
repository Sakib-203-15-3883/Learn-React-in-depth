"use client"

import CalculatorContent from "@/components/calculator/calculator_content"

import InputFieldForCalculator from '@/components/calculator/InputFieldForCalculator'

const Calculator = () => {

  return (

    <div className="p-10 m-10">

      <InputFieldForCalculator />

      <CalculatorContent />

    </div>
  )
}

export default Calculator;