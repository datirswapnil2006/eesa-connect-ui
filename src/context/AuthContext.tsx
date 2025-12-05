import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'faculty' | 'member' | 'alumni';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  approved: boolean;
  position?: string;
  skills?: string[];
  bio?: string;
  achievements?: string[];
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@eesa.edu',
    name: 'Dr. Sarah Chen',
    role: 'admin',
    approved: true,
    position: 'Department Head',
    skills: ['Leadership', 'Research', 'Embedded Systems'],
    bio: 'Leading the EESA community for 5 years.',
    achievements: ['IEEE Senior Member', 'Best Faculty Award 2023'],
  },
  {
    id: '2',
    email: 'faculty@eesa.edu',
    name: 'Prof. James Wilson',
    role: 'faculty',
    approved: true,
    position: 'Associate Professor',
    skills: ['VLSI Design', 'Signal Processing', 'Mentoring'],
    bio: 'Passionate about teaching electronics.',
    achievements: ['Published 50+ papers', 'Patent holder'],
  },
  {
    id: '3',
    email: 'member@eesa.edu',
    name: 'Alex Johnson',
    role: 'member',
    approved: true,
    position: 'Final Year Student',
    skills: ['Arduino', 'PCB Design', 'Python'],
    bio: 'Aspiring embedded systems engineer.',
    achievements: ['Hackathon Winner 2024'],
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (email: string, password: string, name: string, role: UserRole) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
      approved: false, // Needs admin approval
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
