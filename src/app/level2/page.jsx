"use client"
import { useState } from "react";
import Button from "@/components/ToDoApp/Button"

const level2 = () => {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {

    setSelectedButton(button);


  }

  return (
    <>
      <center className="text-2xl font-bold m-10">List of concepts that i learn here </center>

      <div className="m-15 p-10 font-bold text-md">

        <p className="m-2 p-2"> <span className="text-2xl">Fragments: </span> Allows grouping multiple elements without extra DOM nodes </p>
        <p className="m-2 p-2"> <span className="text-2xl">map methods: </span> render list from array data . We used it several time by creating this page that,s hlep us to aboid hard coded</p>
        <p className="m-2 p-2 mb-5"><span className="text-2xl">conditional rendering:   </span>press any button ,data will render according to it . </p>

        <Button

          onClick={() => handleButtonClick("button1")}
          label="Fruits"
          bgColor="blue-500"
          textColor="white"


        /> <br /><br />

        <Button

          onClick={() => handleButtonClick("button2")}
          label="Books"
          bgColor="blue-500"
          textColor="white"


        />

        {selectedButton === "button1" ? <div>

          <ul className="m-10 grid gap-5 ">
            <li>Olive</li>
            <li>Oranges</li>
            <li> Rose apple</li>
            <li>Water apple</li>
            <li>Pineapple</li>
          </ul>


        </div> : null


        }

        {selectedButton === "button2" ? <div>

          <ul className="m-10 grid gap-5 ">
            <li >Wuthering Heights</li>
            <li>Great Expectations</li>
            <li> The Kite Runner</li>
            <li>The Lord of the Rings</li>
            <li>To Kill a Mockingbird</li>
          </ul>


        </div> : null


        }



        <p className="m-2 p-2"> <span className="text-2xl">props: </span> Generally,  pass data from parent to child component . Diffined as attributes in jsx . props are immutables / read only / can,t modify in child component .  Till , i use it so many time by doing this page   </p>


      </div>
    </>
  )
}

export default level2;