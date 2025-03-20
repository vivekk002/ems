import React from "react";

const CompleteTask = (data) => {
  if (!data.data.active) {
    return (
      <div className=" flex-shrink-0 w-[300px] h-full bg-blue-400 rounded-xl p-5 ">
        <div className="flex justify-between items-center">
          <h3 className=" bg-red-600 rounded py-1 px-3 text-sm ">
            {data.data.taskCategory}
          </h3>
          <h2 className=" text-sm ">{data.data.taskDate}</h2>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold ">{data.data.taskTitle}</h2>
        <p className="text-sm mt-3">{data.data.taskDescription}</p>
        <div className="mt-2">
          <button className="w-full bg-green-600 rounded-sm">Completed</button>
        </div>
      </div>
    );
  }
};

export default CompleteTask;
