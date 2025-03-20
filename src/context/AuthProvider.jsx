import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const  {employees}  = getLocalStorage();
    setUserData(employees);
  }, []);
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
