import { useState } from "react";

const OnKeyDown = () => {
  const items = ['hi', 'hello', 'what,s up'];


  let [enteredValue, setEnteredValue] = useState(items);

  const handleOnKeyDown = (event) => {
    // console.log(event.key);
    // console.log(event.target.value);

    if (event.key === "Enter") {
      setEnteredValue([...enteredValue, event.target.value]);
    }
  };
  return (
    <>
      <div>
        <center className="p-5 m-10 text-xl font-bold border-2 bg-whiteSmoke rounded-md ">
          it,s an example of onKeyDown event
        </center>
        <center>
          <h1 className="font-bold">Enter item to add your list </h1>
          <input
            placeholder="Search"
            className="border-4   rounded-md p-3  m-3  text-xl font-bold "
            onKeyDown={handleOnKeyDown}
          />

          {enteredValue.map((item, index) => {
            return <li

              className="text-xl p-1 m-2 font-bold"

              key={index}>{item}</li>;
          })}
        </center>
      </div>
    </>
  );
};

export default OnKeyDown;
