import { useState } from "react";
import ReceivingFunction from "@/components/passing_function_as_props/receiving_function"

const PassingFunction = () => {

  let [count, setCount] = useState(10);

  const handleIncrement = () => {

    setCount(++count);

  }

  const handleDecrement = () => {
    setCount(--count);
  }

  return (

    <div>

      <ReceivingFunction

        initialValue={count}

        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}

      />

    </div>
  )
}

export default PassingFunction;