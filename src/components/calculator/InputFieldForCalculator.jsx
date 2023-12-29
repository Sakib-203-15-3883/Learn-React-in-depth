import { useState } from "react";
const InputFieldForCalculator = () => {

  let [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (

    <>

      <center className="text-2xl font-bold ">Calculator</center>

      <input

        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Calculate Anything"
        className=" border border-slate-600 hover:border-indigo-300 rounded-md p-2"

      />

    </>
  )
}

export default InputFieldForCalculator;