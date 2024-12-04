import React, { createContext, useState, ReactNode } from 'react';
type IModalName = 'list'|  'popover'
interface AuthContextType {
    modalState: boolean;
    showPopover: boolean;
    handlePopover:() => void
    handleModal: () => void;
    modalOff:() => void
    modalOn:() => void
    popoverOff:() => void
    popoverOn:() => void
    changeModalName: (name:IModalName) => void
    modalName: IModalName
}

const ModalContext = createContext<AuthContextType>({
  modalState: false,
  showPopover: false,
  handlePopover: () => {},
  handleModal: () => {},
  modalOff: () => {},
  modalOn: () => {},
  popoverOff: () => {},
  popoverOn: () => {},
  changeModalName: () =>{},
  modalName: 'list'
});

interface AuthProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [modalName, setModalName] = useState<IModalName>('list');
  const [showPopover, setShowPopover] = useState(false);
const changeModalName = (name:IModalName) =>{
  setModalName(name)
}
  const handleModal = () => {
    setModalState(!modalState)
  };

  const modalOff = () => {
    setShowPopover(false)
    setModalState(false)
    changeModalName('list')
    
  };
  const modalOn = () => {
    setModalState(true)
    changeModalName('list')
  };
  const handlePopover = () => {
    setShowPopover(!showPopover)
    changeModalName('list')

  };
  const popoverOff = () => {
    setShowPopover(false)
    setModalState(false)
    changeModalName('list')

  };
  const popoverOn = () => {
    setShowPopover(true)
    setModalState(true)
    changeModalName('popover')

  };
  return (
    <ModalContext.Provider value={{ modalState, handleModal, modalOff, modalOn, changeModalName, modalName, showPopover, popoverOff, popoverOn, handlePopover }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
