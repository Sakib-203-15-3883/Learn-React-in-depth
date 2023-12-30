import { state } from "@/components/state/data";
const State = () => {
  return (
    <div>
      <ul className="m-10 p-2">
        {state.map((item, index) => {
          return (
            <li className="text-xl font-bold p-2 border-4 m-5 rounded-xl bg-whiteSmoke" key={index}>
              <p> # {item} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default State;
