"use client"
import React, { useState } from "react";
import TaskInput from "@/components/ToDoApp/TaskInput";
import Button from "@/components/ToDoApp/Button";
import Task from "@/components/ToDoApp/Task";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDateChange = (e) => {
    setTaskDate(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName && taskDate) {

      const newTask = { name: taskName, date: taskDate };


      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskDate("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <center className="m-20 text-6xl font-bold ">To Do App</center>
      <h1 className="m-20 text-2xl font-bold ">
        I try to create this dummy ui with reusable components with modularity,
        consistency, efficiency, and maintainability. <br /> <br /> here, I
        create 3 components as a button, input_task & to display task data, I
        create task_data component. At last, I bring everything together at the
        root component which is this page [To Do App]{" "}
      </h1>

      <div>
        <ul className="grid grid-cols-5 gap-4 m-10 p-10 bg-blue-300 h-auto">
          <TaskInput
            placeholder={"Enter Your  Note"}
            value={taskName}
            onChange={handleTaskNameChange}
          />

          <TaskInput
            placeholder={"dd/mm/yyyy"}
            value={taskDate}
            onChange={handleTaskDateChange}
          />

          <li className="grid place-content-center">
            <Button
              onClick={handleAddTask}
              label="ADD"
              bgColor="blue-500"
              textColor="white"
            />
          </li>

          {tasks.map((task, index) => (
            <Task
              key={index}
              name={task.name}
              date={task.date}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoApp;
