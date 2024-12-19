import React from "react";


interface Props {
  open: boolean;
  width?: string;
  onClose?: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}

const AppModal = ({ open, onClose, title,  children, width = "w-96 " }: Props) => {
  if (!open) return null;

 

  return (
    <div
      className="fixed  inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50"
      onClick={onClose} 
    >
      <div
        className={`relative bg-white modal-content rounded  ${width} shadow-lg p-6 `}
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-lg font-semibold mb-4  ">{title}</h2>
       
        <div className="overflow-y-auto custom-scrollbar max-h-[80vh]">{children}</div>
    {onClose &&    <button
          className="absolute top-2 right-2 text-primary hover:text-info"
          onClick={onClose}
          
        >
        
        </button>}
      </div>
    </div>
  );
};

export default AppModal;
