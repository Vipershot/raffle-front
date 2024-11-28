import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  
}

const AppModal = ({ open, onClose, title, children }: Props) => {
  if (!open) return null;

 

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} 
    >
      <div
        className="relative w-96 bg-white rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
       
        <div>{children}</div>
        <button
          className="absolute top-2 right-2 text-primary hover:text-info"
          onClick={onClose}
          
        >
          <IoIosCloseCircleOutline className="text-lg" size={25}  />
        </button>
      </div>
    </div>
  );
};

export default AppModal;
