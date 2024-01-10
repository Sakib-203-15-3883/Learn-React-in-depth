import { useState } from "react";

const FormComponent1 = () => {
  const initialData = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [showFormData, setShowFormData] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData.email);
    setShowFormData(true);
    setIsTyping(false);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setIsTyping(true);
  };

  const handleReset = () => {
    setFormData(initialData);
    setShowFormData(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
      </form>

      {showFormData && !isTyping && (
        <div className="text-center">
          <center className="text-2xl font-bold mb-10" > Your Entered Information </center>
          <h1 className="text-2xl font-bold"> {formData.name}</h1>
          <h1 className="text-2xl font-bold"> {formData.email}</h1>
        </div>
      )}
    </div>
  );
};

export default FormComponent1;
