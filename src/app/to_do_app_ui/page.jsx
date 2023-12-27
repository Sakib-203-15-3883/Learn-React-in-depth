"use client";
import TaskInput from "@/components/ToDoApp/TaskInput";
import Button from "@/components/ToDoApp/Button";
import Task from "@/components/ToDoApp/Task"

const ToDoApp = () => {
  return (
    <>
      <center className="m-20 text-6xl font-bold ">To Do App</center>

      <div>
        <ul className=" grid grid-cols-5 gap-4 m-10 p-10 bg-blue-300 h-auto ">

          <TaskInput placeholder={"Enter Your To Note"} />

          <TaskInput placeholder={"dd/mm/yyyy"} />

          <li className="grid place-content-center">
            <Button
              onClick={() => { }}
              label="ADD"
              bgColor="blue-500"
              textColor="white"
            />
          </li>

          <Task name="buy milk" date="4/10/2023" onDelete={() => { }} />

          <Task name="Learn Something" date="4/10/2023" onDelete={() => { }} />







        </ul>
      </div>
    </>
  );
};

export default ToDoApp;
