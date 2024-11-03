"use client";
import { createContext } from "react";
import { useState, useEffect } from "react";
import apiClient from "@/lib/apiClient";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      apiClient.defaults.headers["authorization"] = `Bearer ${token}`;
      apiClient.get("/users/find_user").then((response) => {
        setUser(response.data.matchingUser);
      });
    }
  }, []);

  const adminLogin = async (token, isAdmin) => {
    localStorage.setItem("auth_token", token);
    apiClient.defaults.headers["authorization"] = `Bearer ${token}`;
    localStorage.setItem("is_admin", true);
    apiClient.defaults.headers["is_admin"] = isAdmin;
    try {
      apiClient.get("/users/find_user").then((response) => {
        setUser(response.data.user);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (token) => {
    localStorage.setItem("auth_token", token);
    apiClient.defaults.headers["authorization"] = `Bearer ${token}`;
    try {
      apiClient.get("/users/find_user").then((response) => {
        setUser(response.data.user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    delete apiClient.defaults.headers["authorization"];
    localStorage.removeItem("is_admin");
    delete apiClient.defaults.headers["is_admin"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ adminLogin, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
