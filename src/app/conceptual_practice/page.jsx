"use client";
import Renders_Card from "@/components/conceptual_practice/question1/index";
import ConditionalRendering from "@/components/conceptual_practice/question2/index";

import SearchComponent1 from "@/components/conceptual_practice/question4/search";
import FormComponent1 from "@/components/conceptual_practice/question3/form1";
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
          based on a prop value (e.g., showing different list of items based on
          user clicked).
        </h1>
        <ul className="m-5 p-5">
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 1 :</span>
            <br />
            First we create 2 buttons . users may select 1 button at a time .
            so, we need to identify that which button was selected . that,s why
            , we pass a unique string during onClick attribute . Based on that
            unique key , we render a list
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 2 :</span>
            <br />
            Now, we need to store that unique key into state . And we pass that
            state value to a component
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            new component receive that state value as prop , based on that prop
            value , it,s return a ui . i mean display a list based on button
            clicked
          </li>
        </ul>

        <ConditionalRendering />
      </div>

      {/* ///////   Question 3   //// ///*/}
      <div>
        <h1 className="m-8  text-2xl">
          <span className="font-bold">Question 3 , Form Handling</span>
          <br />
          Build a form component with input fields for name and email. Implement
          an event handler to capture input values and display them on
          submission. Add basic reset feature .
        </h1>
        <ul className="m-5 p-5">
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 1 :</span>
            <br />
            At first , i create a basic form structure with [ form , label
            ,input and submit element ] to receive user name and email .
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 2 :</span>
            <br />
            now i need to handle or store that user data . so , i create an
            object to store name and email . initially values were empty string
            . user information mat change over time , so i create a state and
            pass that object as initial value .
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            now , i use event handler function to store user input data to
            object . first , i copy previous object with spread operator . and
            then updated with new value .
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 4 :</span>
            <br />i added reset feature and and display that user input
            information over UI .
          </li>
        </ul>

        <FormComponent1 />
      </div>

      {/* ///////   Question 4   //// ///*/}
      <div>
        <h1 className="m-8  text-2xl">
          <span className="font-bold">Question 4 , search Handling</span>
          <br />
          Design a React component to implement a search functionality. The
          component should feature a search box allowing users to input search
          queries, complemented by a search icon to initiate the search.
          Implement the search trigger functionality to respond to both Enter
          key presses and clicks on the search icon. Upon searching , dynamically
          display matching elements over the UI.
        </h1>
        <ul className="m-5 p-5">
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 1 :</span>
            <br />
            Create state variables for searchQuery and searchResult using useState.
            Initialize searchQuery with an empty string, and searchResult with an empty array.Create an array named sportsName containing various sports from around the world.
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 2 :</span>
            <br />
            Implement a function handleOnChange to update the searchQuery state based on user input.Implement a function handleOnKeyDown to trigger the search when the Enter key is pressed.
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            Implement a function handleSearch to filter sports based on the current searchQuery.Update the searchResult state with the filtered sports.
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 4 :</span>
            <br />
            Design UI
            Conditionally render either a Search result not found message or the filtered sports list based on the length of searchResult.
          </li>
        </ul>

        <SearchComponent1 />
      </div>
    </>
  );
};

export default Conceptual_practice;
