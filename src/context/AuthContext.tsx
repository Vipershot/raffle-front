import React, { createContext, useState, ReactNode } from 'react';
type IState = 'checking' | 'authenticated' | 'not-authenticated'
interface AuthContextType {
  state: IState;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  state: 'checking',
  login: () => {},
  logout: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<IState>('not-authenticated');

  const login = () => {
    // Implementación del login (por ejemplo, actualiza el estado)
    setState('authenticated')
  };

  const logout = () => {
    // Implementación del logout (por ejemplo, actualiza el estado)
    setState('not-authenticated')
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
