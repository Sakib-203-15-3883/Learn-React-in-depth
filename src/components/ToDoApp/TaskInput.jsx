
const TaskInput = ({ placeholder, value, onChange }) => {
  return (
    <>
      <li className="col-span-2 rounded-md bg-white">
        <input
          type="text"
          placeholder={placeholder}
          className="p-2"
          value={value}
          onChange={onChange}

        />
      </li>
    </>
  );
};

export default TaskInput;
