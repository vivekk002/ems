import React, { useContext, useEffect, useState } from "react";

import { Login } from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage"; 
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

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
    }
    else if (userData) {
      const employee = userData.find((e) => 
        email === e.email && password === e.password 
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserdata(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid email or password");
      }
    }
  };

 

  
  return (
    <>
      {!user ? <Login handleLogIn={handleLogIn} /> : ""}

      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserdata} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserdata} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
