import React from "react";

const NewTask = (data) => {
  return (
    <div className=" flex-shrink-0 w-[300px] h-full bg-green-400 rounded-xl p-5 ">
      <div className="flex justify-between items-center">

        <h3 className=" bg-red-600 rounded py-1 px-3 text-sm ">
          {" "}
          {data.taskCategory}
        </h3>
        <h2 className=" text-sm ">{data.taskDate}</h2>
      </div>
      <h2 className=" mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
      <p className="text-sm mt-3">{data.taskDescription}</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-sm">
          Accept Task
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-sm">
          Reject Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
