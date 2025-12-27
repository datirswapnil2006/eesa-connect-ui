import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export type UserRole = "admin" | "faculty" | "member" | "alumni";

interface User {
  email: string;
  name: string;
  role: UserRole;
  approved: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (email: string, name: string, role: UserRole) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE = "http://localhost:5000"; // BACKEND PORT

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // SIGNUP
  const signup = async (email: string, name: string, role: UserRole) => {
    await axios.post(`${API_BASE}/api/auth/signup`, {
      email,
      name,
      role,
    });
  };

  // LOGIN + ROLE BASED REDIRECT
  const login = async (email: string, password: string) => {
    const res = await axios.post<User>(`${API_BASE}/api/auth/login`, {
      email,
      password,
    });

    setUser(res.data);

    // 🔁 STEP 9: ROLE BASED REDIRECT
    if (res.data.role === "admin") {
      navigate("/dashboard/admin");
    } else if (res.data.role === "faculty") {
      navigate("/dashboard/faculty");
    } else if (res.data.role === "member") {
      navigate("/dashboard/member");
    } else if (res.data.role === "alumni") {
      navigate("/dashboard/alumni");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
