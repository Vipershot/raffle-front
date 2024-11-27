import { Link, useLocation, useNavigate } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";
import { AppButton } from "../AppButton/AppButton";
import { AppInput } from "../AppInput/AppInput";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";

export const AppNavbar = () => {
  const { handleModal, modalOff } = useContext(ModalContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className="p-10 bg-white shadow-md flex justify-between">
      <Link to={"/"} onClick={modalOff}>
        <TitleText text={"Raffle"} color="primary" />
      </Link>
      {pathname !== "/login" && pathname !== "/register" && (
        <div className="w-[60%]">
          <AppInput
            onChange={() => {}}
            onClick={handleModal}
            label={""}
            placeholder={"Buscar..."}
          />
        </div>
      )}

      <div className="flex space-x-2">
        <AppButton
          onClick={() => {
            modalOff();
            navigate("/login");
          }}
          title="Inicia sesion"
          size="md"
          appearance="text"
        />
        <AppButton
          onClick={() => {
            modalOff();
            navigate("/register");
          }}
          title="Registrar"
          appearance="text"
        />
      </div>
    </nav>
  );
};
