import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if email already exists
    if (userData.some((user) => user.email === formData.email)) {
      alert("Email already registered!");
      return;
    }

    // Create new employee object
    const newEmployee = {
      userId: formData.userId,
      firstName: formData.firstName,
      email: formData.email,
      password: formData.password,
      tasks: [],
      taskNumbers: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
    };

    // Update userData with new employee
    setUserData((prev) => [...prev, newEmployee]);

    // Save to localStorage
    const existingData = JSON.parse(localStorage.getItem("emsData") || "{}");
    existingData.employees = [...(existingData.employees || []), newEmployee];
    localStorage.setItem("emsData", JSON.stringify(existingData));

    // Redirect to login
    navigate("/");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <h1 className="text-2xl text-center mb-5 font-bold text-emerald-600">
          Register for EMS portal
        </h1>
        <p className="text-center mb-5 text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="text-emerald-600 hover:underline">
            Login
          </Link>
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 w-full"
            type="text"
            placeholder="Employee ID (e.g., E001)"
          />
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-2 outline-none bg-transparent placeholder:text-gray-400 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-2 outline-none bg-transparent placeholder:text-gray-400 w-full"
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-2 outline-none bg-transparent placeholder:text-gray-400 w-full"
            type="password"
            placeholder="Password"
          />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-2 outline-none bg-transparent placeholder:text-gray-400 w-full"
            type="password"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
