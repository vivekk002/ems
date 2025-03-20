import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl py-6 px-9 w-[40%] bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[40%] bg-blue-400">
        <h2 className="text-3xl font-semibold"> {data.taskNumbers.active} </h2>
        <h3 className="text-xl font-medium">Active Tasks</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[40%] bg-green-400">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[40%] bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
