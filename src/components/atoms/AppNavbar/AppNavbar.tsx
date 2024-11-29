import { Link, useLocation, useNavigate } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";
import { AppButton } from "../AppButton/AppButton";
import { AppInput } from "../AppInput/AppInput";
import { useContext, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { AuthContext } from "../../../context/AuthContext";
import { RxAvatar } from "react-icons/rx";

export const AppNavbar = () => {

  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover((prev) => !prev);
  };

  const {authenticated, logout} = useContext(AuthContext)
  const { handleModal, modalOff } = useContext(ModalContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className="p-10 bg-white shadow-md flex flex-wrap justify-between">
      <Link to={"/"} onClick={modalOff} className="flex items-center">
        <TitleText text={"Raffle"} color="primary" />
      </Link>
      {pathname !== "/login" && pathname !== "/register" && (

<div className="w-[60%] hidden lg:block">
          <AppInput
            onChange={() => {}}
            onClick={handleModal}
            label={""}
            placeholder={"Buscar..."}
          />
        </div>
      )}

 {!authenticated ?  <div className="flex space-x-2">
        <AppButton
          onClick={() => {
            modalOff();
            navigate("/login");
          }}
          title="Inicia sesion"
          size="sm"
          appearance="text"
        />
        <AppButton
          onClick={() => {
            modalOff();
            navigate("/register");
          }}
          title="Registrar"
          appearance="text"
          size="sm"
        />
      </div> :
       <div className="relative inline-block">
       <RxAvatar
         onClick={togglePopover}
         className="text-lg text-primary hover:text-info cursor-pointer"
         size={25}
       />
       {showPopover && (
         <div className="absolute top-full mt-2 right-0 w-[250px] bg-white border border-gray-300 rounded shadow-md p-2 z-10">
          <div className=" mb-2">
          <TitleText  text="Información de la cuenta" size="xs"/>
          </div>
           <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-info rounded-full flex items-center justify-center text-white">
              <RxAvatar size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Genesis</p>
              <p className="text-xs text-gray-500">rojasgenesiis15@gmail.com</p>
            </div>
          </div>
          
           <AppButton size="full" title="Cerrar sesion" onClick={logout}  />
         </div>
       )}
     </div>}
      
   
      {pathname !== "/login" && pathname !== "/register" && (
        <div className="w-[100%] block lg:hidden">
          <AppInput
            onChange={() => {}}
            onClick={handleModal}
            label={""}
            placeholder={"Buscar..."}
          />
        </div>
      )}
    </nav>
  );
};
