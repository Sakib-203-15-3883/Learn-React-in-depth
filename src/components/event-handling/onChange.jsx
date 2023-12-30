
import { useState } from "react";
const OnChange = () => {

  let [inputValue, setInputValue] = useState();

  const handleOnChange = (event) => {

    console.log(event);

    setInputValue(event.target.value);



  }

  return (

    <div className="grid place-content-center">
      <center className="p-5 m-5 text-xl font-bold border-2 bg-whiteSmoke rounded-md ">it,s an example of onChange event</center>

      <input

        type="text"
        placeholder="search"
        onChange={handleOnChange}
        value={inputValue}
        className="border-4 border-whiteSmoke-700  rounded-md p-3  m-3 bg-whiteSmoke text-xl font-bold"

      />

      <p>Input Value is : {inputValue}</p>

    </div>
  )
}

export default OnChange;