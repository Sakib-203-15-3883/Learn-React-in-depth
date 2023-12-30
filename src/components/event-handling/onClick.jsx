import { useState } from "react";

const OnClick = () => {
  let [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (selectedButton) => {
    setSelectedButton(selectedButton);
  };

  return (
    <div className="grid place-content-center">
      <center className="p-5 m-5 text-xl font-bold border-2 bg-whiteSmoke rounded-md ">it,s an example of onClick event</center>
      <button
        onClick={() => {
          handleButtonClick("fruits");
        }}
        className="border-4 border-red-500  rounded-md  m-3 bg-blue-400 text-xl font-bold  "
      >
        Click Here to see fruits name
      </button>

      <button
        onClick={() => {
          handleButtonClick("sports");
        }}
        className="border-4 border-red-500  rounded-md  m-3 bg-blue-400 text-xl font-bold  "
      >
        Click Here to see sports name
      </button>


      {selectedButton === "fruits" ? (
        <ul className="p-5 m-5 text-xl font-bold border-2 bg-whiteSmoke rounded-md ">
          <li>Olive</li>
          <li>Oranges</li>
          <li>Rose apple</li>
          <li>Water apple</li>
          <li>Pineapple</li>
        </ul>
      ) : null}



      {selectedButton === "sports" ? (
        <ul className="p-5 m-5 text-xl font-bold border-2 bg-whiteSmoke rounded-md ">
          <li>Cricket</li>
          <li>Football</li>
          <li>cricket</li>
          <li>basketball</li>
          <li>cricket</li>
        </ul>
      ) : null}

    </div>
  );
};

export default OnClick;
