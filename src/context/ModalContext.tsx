import React, { createContext, useState, ReactNode } from 'react';
interface AuthContextType {
    modalState: boolean;
    handleModal: () => void;
    modalOff:() => void
}

const ModalContext = createContext<AuthContextType>({
  modalState: false,
  handleModal: () => {},
  modalOff: () => {},

});

interface AuthProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    setModalState(!modalState)
  };

  const modalOff = () => {
    setModalState(false)
  };
  return (
    <ModalContext.Provider value={{ modalState, handleModal, modalOff }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
