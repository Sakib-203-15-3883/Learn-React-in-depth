import axios from "axios";
import { useState, useEffect } from "react";
const DisplayLocalApiData = () => {
  const [studentsInformation, setStudentsInformation] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/studentData")
      .then((res) => {
        return res.data;
      })

      .then((data) => {
        setStudentsInformation(data);
      })
      .catch((error) => {
        setError("Error fetching data. Backend is not hosted");
      });

  }, []);

  return (
    <>
      <div className="mb-20 ">
        <center className="font-bold text-3xl">
          Data from local express backend{" "}
        </center>
      </div>

      {error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (<div>
        {studentsInformation.map((studentsInformation, index) => {
          return (
            <>
              <ul>
                <li key={index} className="m-4 p-4 grid place-content-center">
                  {" "}
                  Id = {studentsInformation.id} <br /> name ={" "}
                  {studentsInformation.name}{" "}
                </li>
              </ul>
            </>
          );
        })}
      </div>)}

    </>
  );
};

export default DisplayLocalApiData;
