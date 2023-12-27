"use client ";

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
        <button
          type="button"
          onClick={onDelete}
          className="bg-red-500 text-white p-2  rounded-md"
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Task;