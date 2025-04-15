import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import Register from "./components/Auth/Register";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserdata(userData.data);
    }
  }, []);

  const handleLogIn = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserdata(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !user ? (
              <Login handleLogIn={handleLogIn} />
            ) : user === "admin" ? (
              <AdminDashboard changeUser={setUser} data={loggedInUserdata} />
            ) : (
              <EmployeeDashboard data={loggedInUserdata} changeUser={setUser} />
            )
          }
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
