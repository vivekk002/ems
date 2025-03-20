import React, { useState } from "react";

export const Login = ({ handleLogIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="enter your email"
          ></input>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-2 outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="enter your password"
          ></input>
          <button className="mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
