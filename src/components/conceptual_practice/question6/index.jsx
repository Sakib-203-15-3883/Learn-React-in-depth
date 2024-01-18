import { useState } from "react";

const Question6 = () => {
  const listOfSports = ["Football", "Cricket", "Tennis"];
  const [item, setItem] = useState("");
  const [list, setList] = useState(listOfSports);

  const handleOnChange = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    setList((previousList) => [...previousList, item]);
    setItem("");
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const handleButtonClick = () => {
    addItem();
  };

  const handleReset = () => {
    setList([]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="item" className="block mb-2">
          Enter item to add:
        </label>
        <input
          placeholder="Enter item to add"
          id="item"
          name="item"
          value={item}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          className="border border-gray-300 p-2 w-full"
        />
      </div>

      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Submit
      </button>
      <button
        onClick={handleReset}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Reset All Items
      </button>

      {list.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">List of Items:</h2>
          {list.map((item, index) => (
            <ul key={index} className="list-disc pl-4">
              <li>{item}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question6;
