const ReceivingFunction = ({ initialValue, handleIncrement, handleDecrement }) => {

  return (

    <div>

      <center>Initial value : {initialValue}</center>
      <button onClick={handleIncrement} className="p-5 m-5 border-2 rounded-md bg-blue-500  ">

        Increment
      </button>

      <button onClick={handleDecrement} className="p-5 m-5 border-2 rounded-md bg-blue-500  " >

        Decrement
      </button>


    </div>
  )
}

export default ReceivingFunction;