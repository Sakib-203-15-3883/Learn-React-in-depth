const BoxComponent = ({ children }) => {

  console.log(children);

  return (

    <div className="bg-gray-300 p-6 rounded-md shadow-md">

      {children}

    </div>
  )
}

export default BoxComponent;