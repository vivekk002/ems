import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex h-screen w-screen items-center justify-center relative">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <h1 className="text-2xl text-center mb-5 font-bold text-emerald-600">
          Login to EMS portal
        </h1>
        <p className="text-center mb-5 text-gray-500">
          New here? <Link to="/register">Register</Link>
        </p>
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
      <div className="absolute bottom-4 right-4 text-gray-400 text-xs opacity-50 hover:opacity-100 transition-opacity">
        <p>Admin: admin@example.com</p>
        <p>Password: 123</p>
      </div>
    </div>
  );
};
