import React, { useState } from "react";

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        hey this is me <br></br>
        <span className="text-3xl font-semibold">
          User Name
          {/* {props.data.firstName}{" "} */}
        </span>{" "}
        .!

      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm "
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
