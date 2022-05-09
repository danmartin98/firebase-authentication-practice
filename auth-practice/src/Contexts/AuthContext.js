import React, { useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const value
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
