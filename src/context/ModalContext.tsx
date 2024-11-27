import React, { createContext, useState, ReactNode } from 'react';
interface AuthContextType {
    modalState: boolean;
    handleModal: () => void;

}

const ModalContext = createContext<AuthContextType>({
  modalState: false,
  handleModal: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    // Implementación del login (por ejemplo, actualiza el estado)
    setModalState(!modalState)
  };


  return (
    <ModalContext.Provider value={{ modalState, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
