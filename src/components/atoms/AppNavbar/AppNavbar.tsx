import { Link, useLocation, useNavigate } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";
import { AppButton } from "../AppButton/AppButton";
// import { AppInput } from "../AppInput/AppInput";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { AuthContext } from "../../../context/AuthContext";
import { Popover } from "../../organims/Popover/Popover";
import { getProfile } from "../../../services/auth";
import { IoTicketOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
export const AppNavbar = () => {
  const {
    // handleModal,
    modalOff,
    modalOn,
    changeModalName,
    showPopover,
    popoverOff,
    popoverOn,
  } = useContext(ModalContext);


  const { logout, profile, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == "/") {
      if (localStorage.getItem("token")) {
        getProfile().then((res) =>
          setProfile(res)
        );
      }
    }
    popoverOff();
  }, [pathname]);

  return (
    <nav className="p-10 bg-white shadow-md flex flex-wrap gap-5 md:gap-0 items-center justify-between">
      <Link to={"/"} onClick={modalOff} className="flex items-center gap-2">
      <IoTicketOutline
              className="cursor-pointer text-primary"
              size={32}
            />
        <TitleText text={"Raffle"} color="primary" />
      </Link>
      {/* {pathname !== "/login" && pathname !== "/register" && (
        <div className="w-[60%] hidden lg:block">
          <AppInput
            onChange={() => {}}
            onClick={() => {
              changeModalName("list");
              handleModal();
            }}
            label={""}
            placeholder={"Buscar..."}
          />
        </div>
      )} */}
      {/* <Link to={"/winners"}>
        <p className="text-info">Noticias</p>
      </Link> */}
      {!localStorage.getItem("token") ? (
        <div className="flex space-x-2">
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
        </div>
      ) : (
        <div className="relative ">
          <HiMenu
            onClick={() => {
              modalOn();
              changeModalName("popover");
              if (showPopover) {
                popoverOff();
              } else {
                popoverOn();
              }
            }}
            className="text-lg text-primary hover:text-info cursor-pointer"
            size={35}
          />
          {showPopover && <Popover onClick={logout} profile={profile} />}
        </div>
      )}
{/* 
      {pathname !== "/login" && pathname !== "/register" && (
        <div className="w-[100%] block lg:hidden">
          <AppInput
            onChange={() => {}}
            onClick={handleModal}
            label={""}
            placeholder={"Buscar..."}
          />
        </div>
      )} */}
    </nav>
  );
};
