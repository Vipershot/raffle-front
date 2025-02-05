import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import logoraffle from "../../../assets/logoraffle.png";
export const AppFooter = () => {
  return (
    <>
      <div >
        <div className="pb-10">
          <div className=" text-dark flex justify-center  items-center p-6  gap-3 bg-white">
            <strong> Copyright 2024, Todos nuestros derechos reservados</strong>{" "}
            <Link className="flex gap-1" to={"/"}>
              <img src={logoraffle} alt="raffle" />
            </Link>
            <a
              target="_blank"
              className="text-primary"
              href="https://www.instagram.com/raffle.ve/"
            >
            <div className="flex justify-center">
            <IoLogoInstagram
                className="cursor-pointer hover:text-dark"
                size={30}
              />
              <p className=" text-dark">
              @Raffle.ve
            </p>
            </div>
            </a>
          </div>
          <div className="text-dark"></div>
          <div>
            <p className="flex justify-center text-dark">
              Aviso legal Politica de privacidad Quienes Somos Contacto Politica
              de cookies Declaracion de privacidad
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
