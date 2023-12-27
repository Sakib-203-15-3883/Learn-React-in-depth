"use client";

const TaskInput = ({ placeholder }) => {
  return (
    <>
      <li className="col-span-2 rounded-md bg-white">
        <input type="text" placeholder={placeholder} className="p-2" />
      </li>
    </>
  );
};

export default TaskInput;
