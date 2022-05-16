import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  
  const onLogin = (email, password) => {
    loginRequest(email, password);
  };
  return (
    <AuthenticationContext.Provider>{children}</AuthenticationContext.Provider>
  );
};
