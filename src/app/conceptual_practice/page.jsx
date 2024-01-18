"use client";
import Renders_Card from "@/components/conceptual_practice/question1/index";
import ConditionalRendering from "@/components/conceptual_practice/question2/index";

import SearchComponent1 from "@/components/conceptual_practice/question4/search";
import FormComponent1 from "@/components/conceptual_practice/question3/form1";

import Question6 from "@/components/conceptual_practice/question6"


import SearchAndSort from "@/components/conceptual_practice/question5/searchAndSort"
const Conceptual_practice = () => {
  return (


    <>

      <p className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md ml-16 mr-16 transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue grid place-content-center mt-16"><a href="https://github.com/Sakib-203-15-3883/Learn-React-in-depth-with-NextJs/tree/main/src/components/conceptual_practice" target="_blank"> Source code for all question </a></p>



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


      {/* ///////   Question 5   //// ///*/}
      <div>
        <h1 className="m-8  text-2xl">
          <span className="font-bold">Question 5 , complete given task :

          </span>
          <br /><br />

          Goals:

          1. Add a search functionality to filter phones.
          2. Implement sorting options for phones (ascending and descending).
          3. Display the total count of phones.
          4.Give feedback if no phones match the search query.

        </h1>
        <ul className="m-5 p-5">
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 1 :</span>
            <br />
            First create a input box to receive user query . Then , match that query with existing data . store all the matching data into a new array .
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 2 :</span>
            <br />
            perform sort operation on that filtered new array . store that sorted value into new array .
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            call both search and sort function as a callback .  and store values into a new array  . this array values are sorted and filtered .
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 4 :</span>
            <br />
            based on sorted and filtered value , render UI .
          </li>
        </ul>

        <SearchAndSort />
      </div>




      {/* ///////   Question 6   //// ///*/}
      <div>
        <h1 className="m-8  text-2xl">
          <span className="font-bold">Question 6 , complete given task :

          </span>
          <br /><br />

          <span className="font-bold text-3xl">Question:
          </span>

          You are tasked with enhancing a sports application. The application currently displays an array containing the names of three sports. The goal is to implement a feature that allows users to dynamically add a new sport to the list. Once a new sport is added, the updated list should be rendered on the user interface. <br /><br /><br />

          <span className="font-bold">Requirements:
          </span>

          Use React for the frontend development.
          Initially, the array should contain the names of three sports: "Football," "Basketball," and "Tennis."
          Implement a feature that lets users input the name of a new sport.
          Provide a mechanism, such as a button click or Enter key press, for users to submit the new sport name.
          Validate that the input is not empty before adding it to the list.
          Update the state with the new list of sports using the functional form of setState.
          Clear the input field after successfully adding a new sport.
          Render the updated list on the user interface.

        </h1>
        <ul className="m-5 p-5">
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 1 :</span>
            <br />
            create a input field to fetch item name from users . then store that item name into item state variable .
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 2 :</span>
            <br />
            when user click the submit button or press enter key , that time we call setItem method to update the item variable with entered item value .
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            now , we need to store that new value to an array called list . we call add item function , that add new value to array based on previous array value . so , we need another state that holds list array and updated that list array based on previous array . so , here , we update atate based on previous state .
          </li>

          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 4 :</span>
            <br />
            Finally , we render all the things over ui .
          </li>
        </ul>

        <Question6 />
      </div>
    </>
  );
};

export default Conceptual_practice;
