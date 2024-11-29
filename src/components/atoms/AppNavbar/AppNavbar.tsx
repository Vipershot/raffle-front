import { Link, useLocation, useNavigate } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";
import { AppButton } from "../AppButton/AppButton";
import { AppInput } from "../AppInput/AppInput";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { AuthContext } from "../../../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
import { Popover } from "../../molecules/Popover/Popover";
import { getProfile } from "../../../services/auth";

export const AppNavbar = () => {

  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover((prev) => !prev);
  };
  const [profile, setProfile] = useState({
    email:'',
    name: ''
});

  const {logout} = useContext(AuthContext)
  const { handleModal, modalOff } = useContext(ModalContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if(pathname == '/'){
      if(localStorage.getItem('token')){
        getProfile().then(res => setProfile({name:res.name, email:res.email}))
    }
    }
    setShowPopover(false)
  }, [pathname]);
  return (
    <nav className="p-10 bg-white shadow-md flex flex-wrap items-center justify-between">
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

 {!localStorage.getItem('token') ?  <div className="flex space-x-2">
        <AppButton
          onClick={() => {
            modalOff();
            navigate("/login");
            setShowPopover(false)
          }}
          title="Inicia sesion"
          size="sm"
          appearance="text"
        />
        <AppButton
          onClick={() => {
            modalOff();
            navigate("/register");
            setShowPopover(false)
          }}
          title="Registrar"
          appearance="text"
          size="sm"
        />
      </div> :
       <div className="relative ">
       <RxAvatar
         onClick={togglePopover}
         className="text-lg text-primary hover:text-info cursor-pointer"
         size={35}
       />
       {showPopover && <Popover onClick={logout} profile={profile}/>}
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
