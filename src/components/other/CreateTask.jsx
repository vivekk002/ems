import { useContext, useState } from "react";
import React from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks({
      taskTitle,
      taskCategory,
      taskDate,
      taskDescription,
      active: false,
      newTask: true,
      comlpeted: false,
      failed: false,
    });

    const data = userData;
    
    data.forEach(function (elem) {
      if(elem.firstName === assignTo){
        elem.tasks.push(tasks);
        elem.taskNumbers.newTask++;
      }
    })

    setUserData(data);
    console.log("userData",userData);
    
    


   
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className=" text-sm text-gray-300 mt-0.5 ">task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="make your UI"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3 className=" text-sm text-gray-300 mt-0.5 ">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              name=""
              id=""
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3 className=" text-sm text-gray-300 mt-0.5 ">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              name=""
              id=""
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3 className=" text-sm text-gray-300 mt-0.5 ">Category</h3>
            <input
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="Design essaywriting etc."
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start ">
          <h3 className=" text-sm text-gray-300 mt-0.5 ">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            name=""
            id=""
            className=" w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full h-9 ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
