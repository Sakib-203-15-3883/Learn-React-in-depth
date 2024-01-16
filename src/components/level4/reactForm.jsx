"use client";
import { useState } from "react";
const ReactForm = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [fromSubmit, setFromSubmit] = useState(false);
  const [editFrom, setEditFrom] = useState(false);
  const [reset, setReset] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFromSubmit(true);
    setEditFrom(false)

  };

  const handleOnChangeForName = (event) => {
    // console.log(event.target.value);

    setName(event.target.value);
    setEditFrom(true)
  };

  const handleOnChangeForId = (event) => {
    // console.log(event.target.value);

    setId(event.target.value);
    setEditFrom(true)
  };

  const handleOnClick = () => {
    setName("")
    setId("")

  }

  return (
    <>
      <center className="text-2xl font-bold m-4 "> Forms in React</center>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="m-4">
            <label htmlFor="name">Enter Your Name : </label>
            <input
              type="text"
              placeholder="Enter Your Name :"
              id="name"
              name="name"
              value={name}
              onChange={handleOnChangeForName}
            />
          </div>

          <div className="m-4">
            <label htmlFor="id">Enter Your Id : </label>
            <input
              type="number"
              placeholder="Enter Your Id :"
              id="id"
              name="id"
              value={id}
              onChange={handleOnChangeForId}
            />
          </div>

          <div className="m-4">
            <button
              type="submit"
              className="bg-blue-700 p-2 border-2 rounded-md"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>

        <div className="m-4">
          <button
            type="submit"
            onClick={handleOnClick}
            className="bg-blue-700 p-2 border-2 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="p-4 m-6 grid gap-6">
        {fromSubmit && !editFrom && (
          <>
            {" "}
            <center>Your provided information are given bellow : </center>
            <p>Name : {name}</p>
            <p>Id : {id}</p>
          </>
        )}
      </div>
    </>
  );
};

export default ReactForm;
