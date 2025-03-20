import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData,setUserData] = useContext(AuthContext);


  return (
    <div className="bg-[#1c1c1c] p-5 rounded-sm mt-5 h-auto   ">
      <div className="bg-emerald-700 mb-5  py-2 px-4 flex justify-between rounded ">
        <h2 className="w-1/5 text-center ">Employee Name</h2>
        <h2 className="w-1/5 text-center ">New Task</h2>
        <h2 className="w-1/5 text-center ">Active Task</h2>
        <h2 className="w-1/5 text-center ">Completed Task</h2>
        <h2 className="w-1/5 text-center ">Failed Task</h2>
      </div>
      <div className=" overflow-auto">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}

              className="   py-2 px-4 flex justify-between rounded border-2 border-emerald-900 mb-2"
            >
              <h3 className="text-sm text-center w-1/5">{elem.firstName} </h3>
              <h3 className="text-sm text-center w-1/5">
                {elem.taskNumbers.newTask}{" "}
              </h3>
              <h3 className="text-sm text-center w-1/5">
                {elem.taskNumbers.active}{" "}
              </h3>
              <h3 className="text-sm text-center w-1/5">
                {elem.taskNumbers.completed}{" "}
              </h3>
              <h3 className="text-sm text-center w-1/5">
                {elem.taskNumbers.failed}{" "}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
