import Renders_Card from "@/components/conceptual_practice/question1/index";
const Conceptual_practice = () => {
  return (
    <>
      <div>
        <h1 className="m-8  text-2xl">
          <span className="font-bold">Question 1 :</span>
          <br />
          Create a React component that renders a basic card with information
          passed as props.
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
            then we pass each array element one by one to Card component  with map method .
          </li>
          <li className="mt-5 mb-5">
            <span className="font-bold text-xl">step 3 :</span>
            <br />
            Card component receive that data and give the UI , i mean render card over ui . The main task for component is that just receive data and based on that data provide the UI .
          </li>
        </ul>

        <Renders_Card />
      </div>
    </>
  );
};

export default Conceptual_practice;
