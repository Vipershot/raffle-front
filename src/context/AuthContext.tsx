import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  authenticated: boolean;
  login: (token:string) => void;
  logout: () => void;
  token:string | null;
}

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  login: () => {},
  logout: () => {},
  token:null
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState<string |null >(null)
  const login = (token:string) => {
    // Implementación del login (por ejemplo, actualiza el estado)
    setAuthenticated(true)
    localStorage.setItem("token", token)
    setToken(token)
  };

  const logout = () => {
    // Implementación del logout (por ejemplo, actualiza el estado)
    localStorage.removeItem("token");
    setAuthenticated(false)
    setToken(null)

  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
