import { Link, useLocation, useNavigate } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";
import { AppButton } from "../AppButton/AppButton";
import { AppInput } from "../AppInput/AppInput";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { AuthContext } from "../../../context/AuthContext";

export const AppNavbar = () => {
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
      </div> : <AppButton size="sm" onClick={logout} title="Cerrar Sesion"/>}
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
