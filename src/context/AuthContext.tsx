import React, { createContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  authenticated: boolean;
  login: (token:string) => void;
  logout: () => void;
  token:string | null;
  profile: {name: string, email:string},
  setProfile: React.Dispatch<React.SetStateAction<{name: string, email:string}>>
}

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  login: () => {},
  logout: () => {},
  token:null,
  profile: {name:"", email:""},
  setProfile: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState<string |null >(null)
  const [profile, setProfile] = useState<{name: string, email:string}>({
    name:"",
    email:""
  })
  const login = (token:string) => {
    // Implementación del login (por ejemplo, actualiza el estado)
    setAuthenticated(true)
    localStorage.setItem("token", token)
    setToken(token)
  };

  const logout = () => {
    // Implementación del logout (por ejemplo, actualiza el estado)
    setAuthenticated(false)
    setToken(null)
    localStorage.removeItem("token");
    navigate('/login')
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout, token, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
