// import { useState } from "react";
// import { AuthContext } from "./AuthContext";

// const getInitialUser = () => {
//   const token = localStorage.getItem("tasteTrailToken");
//   const storedUser = localStorage.getItem("tasteTrailUser");

//   if (token && storedUser) {
//     return JSON.parse(storedUser);
//   }
//   return null;
// };

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(getInitialUser);

//   const login = (userData, token) => {
//     localStorage.setItem("tasteTrailToken", token);
//     localStorage.setItem("tasteTrailUser", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("tasteTrailToken");
//     localStorage.removeItem("tasteTrailUser");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import { useState } from "react";
import { AuthContext } from "./AuthContext";

const getInitialAuth = () => {
  const token = localStorage.getItem("tasteTrailToken");
  const user = localStorage.getItem("tasteTrailUser");

  if (token && user) {
    return { user: JSON.parse(user), token };
  }
  return { user: null, token: null };
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getInitialAuth);

  const login = (userData, token) => {
    localStorage.setItem("tasteTrailToken", token);
    localStorage.setItem("tasteTrailUser", JSON.stringify(userData));
    setAuth({ user: userData, token });
  };

  const logOut = () => {
    localStorage.removeItem("tasteTrailToken");
    localStorage.removeItem("tasteTrailUser");
    setAuth({ user: null, token: null });
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        token: auth.token,
        login,
        logOut,   
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
