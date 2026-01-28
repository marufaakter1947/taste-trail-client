import { useState } from "react";
import { AuthContext } from "./AuthContext";

const getInitialUser = () => {
  const token = localStorage.getItem("tasteTrailToken");
  const storedUser = localStorage.getItem("tasteTrailUser");

  if (token && storedUser) {
    return JSON.parse(storedUser);
  }
  return null;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser);

  const login = (userData, token) => {
    localStorage.setItem("tasteTrailToken", token);
    localStorage.setItem("tasteTrailUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("tasteTrailToken");
    localStorage.removeItem("tasteTrailUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
