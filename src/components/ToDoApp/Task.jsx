"use client ";
import Button from "./Button";

const Task = ({ name, date, onDelete }) => {
  return (
    <>
      <li className="col-span-2 rounded-md bg-white">
        <p className="grid place-content-center mt-2">{name}</p>
      </li>


      <li className="col-span-2 rounded-lg bg-white">
        <p className="grid place-content-center mt-2">{date}</p>
      </li>


      <li className="grid place-content-center">
        <Button

          onClick={onDelete}
          label="Delete"
          bgColor="red-500"
          textColor="white"

        />

      </li>
    </>
  );
};

export default Task;