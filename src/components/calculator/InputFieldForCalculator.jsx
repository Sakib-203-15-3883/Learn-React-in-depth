const InputFieldForCalculator = ({ displayValue }) => {
  return (
    <>
      <center className="text-2xl font-bold ">Calculator</center>

      <input
        type="text"
        placeholder="Calculate Anything"
        className=" border border-slate-600 hover:border-indigo-300 rounded-md p-2"
        value={displayValue}
        readOnly
      />
    </>
  );
};

export default InputFieldForCalculator;
