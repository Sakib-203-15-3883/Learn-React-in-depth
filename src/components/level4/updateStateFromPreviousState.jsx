"use client"
import { useState } from "react";

const UpdateStateFromPreviousState = () => {
  const listOfItems = ["t-shirt", "football", "cricket"];

  const [list, setList] = useState(listOfItems);
  const [newItem, setNewItem] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addNewItem();
  };

  const submitButtonHandle = () => {
    addNewItem();
  };

  const handleOnKeyDownForNewItem = (event) => {
    if (event.key === "Enter") {
      addNewItem();
    }
  };

  const addNewItem = () => {
    if (newItem.trim() !== "") {
      setList((previousState) => [...previousState, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-2xl font-bold mb-4 text-center">
        Update state from previous state
      </div>

      <div className="text-2xl font-bold mb-4">
        Initial value for listOfItems:
        {listOfItems.map((item, index) => (
          <ul key={index} className="list-disc pl-4">
            <li>{item}</li>
          </ul>
        ))}
      </div>

      <form onSubmit={handleOnSubmit} className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Enter Your item Name:
        </label>
        <input
          type="text"
          placeholder="Enter Your item Name"
          id="name"
          name="name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleOnKeyDownForNewItem}
          className="border border-gray-400 p-2 w-full"
        />

        <button
          type="submit"
          onClick={submitButtonHandle}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div className="text-2xl font-bold mb-4 m-16">
        Updated value of listOfItems:
        {list.map((item, index) => (
          <ul key={index} className="list-disc pl-4">
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UpdateStateFromPreviousState;
