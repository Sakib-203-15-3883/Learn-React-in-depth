"use client"
import { useState } from "react";
import BoxComponent from "@/components/BoxComponent";

import { learn_components } from "@/components/concept_list";


const Button = () => {

  let [number, setNumber] = useState(10);

  const HandleIncrease = () => {

    if (number >= 20) {
      return 20;
    } else {

      number++;
      setNumber(number);

    }

  };

  const HandleDecrease = () => {
    if (number <= 0) {
      return 0;
    } else {

      number--;
      setNumber(number);
    }
  };



  return (
    <div className="grid gap-10 m-10">


      <BoxComponent>

        <p>Perform increment & decrement for value 10 .[ Limit 0 to 20 ] </p>

        <p className="m-10 font-bold ">Current value : {number}</p>
        <div>


          <button type="button" onClick={HandleIncrease} className="bg-blue-500 text-white p-2 rounded-md"> increase </button> <br /> <br />

          <button type="button" onClick={HandleDecrease} className="bg-blue-500 text-white p-2 rounded-md"> decrease </button>


        </div>



      </BoxComponent>


      <BoxComponent>
        <p className="font-bold m-10">
          All the concepts that I learned related to components are given below</p>


        <ul>
          {learn_components.map((item) => (
            <li key={item.id} className="p-3">
              <strong>{item.name}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </BoxComponent>


    </div>
  )
}

export default Button;