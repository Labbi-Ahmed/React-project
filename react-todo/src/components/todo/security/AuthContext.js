import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  function login(username, password) {
    if (username === "labbi@gmail.com" && password === "1234") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setUsername("")
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        login,
        logout,
        username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
