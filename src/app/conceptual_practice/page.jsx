"use client"
import Renders_Card from "@/components/conceptual_practice/question1/index";
import ConditionalRendering from "@/components/conceptual_practice/question2/index"
const Conceptual_practice = () => {
  return (
    <>
      {/* ///////   Question 1   //// ///*/}
      <div>
        <h1 className="m-8  text-2xl">
          <span className="font-bold">
            Question 1 , Simple Component Rendering , dynamically :
          </span>
          <br />
          Create a React component that renders a basic card with information
          passed as props.Do it dynamically.
        </h1>
        <ul className="m-5 p-5">
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 1 :</span>
            <br />
            Create a array of objects where each array element[object] hold
            specific card data .
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 2 :</span>
            <br />
            then we pass each array element one by one to Card component with
            map method .
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            Card component receive that data and give the UI , i mean render
            card over ui . The main task for component is that just receive data
            and based on that data provide the UI .
          </li>
        </ul>

        <Renders_Card />
      </div>

      {/* ///////   Question 2   //// ///*/}
      <div>
        <h1 className="m-8  text-2xl">
          <span className="font-bold">Question 2 , Conditional Rendering</span>
          <br />
          Implement a component that conditionally renders different content
          based on a prop value (e.g., showing different list of items based on user clicked).
        </h1>
        <ul className="m-5 p-5">
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 1 :</span>
            <br />
            First we create 2 buttons . users may select 1 button at a time . so, we need to identify that which button was selected . that,s why , we pass a unique string during onClick attribute . Based on that unique key , we render a list
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 2 :</span>
            <br />
            Now, we need to store that unique key into state . And we pass that state value to a component
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            new component receive that state value as prop , based on that prop value , it,s return a ui . i mean display a list based on button clicked
          </li>
        </ul>

        <ConditionalRendering />
      </div>
    </>
  );
};

export default Conceptual_practice;
