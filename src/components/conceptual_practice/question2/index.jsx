// Task: Conditional Rendering

// Implement a component that conditionally renders different content based on a prop value 

import SelectedList from "@/components/conceptual_practice/question2/message";
import { useState } from "react";

const ConditionalRendering = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleOnClick = (fruits) => {
    setSelectedButton(fruits);
  };

  return (
    <>


      <div className="grid place-content-center">

        <button
          className="border-md rounded-md text-xl p-6 m-5 bg-blue-500 "
          onClick={() => {
            handleOnClick("Fruits");
          }}
        >
          Fruits
        </button>


        <button
          className="border-md rounded-md text-xl p-6 m-5 bg-blue-500 "
          onClick={() => {
            handleOnClick("Sports");
          }}
        >
          Sports
        </button>


      </div>



      <SelectedList selectedButton={selectedButton} />
    </>
  );
};

export default ConditionalRendering;
