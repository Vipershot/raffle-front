import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";

export const AppFooter = () => {
  return (

    <>
      <div className="bg-info mt-40">
        <div className=" p-5 ">
          <div className="text-white mb-3 flex justify-center gap-3">
            <strong> Copyright 2024, Todos nuestros derechos reservados</strong>{" "}
           <Link className="flex gap-1" to={'/'}> <IoTicketOutline
              className="cursor-pointer hover:text-dark"
              size={22}
            />{" "}
            <strong className="cursor-pointer hover:text-dark">Raffle.com</strong></Link>
          </div>
          <hr className="text-dark my-5" />
          <div>
            <p className="flex justify-center text-white">
              Aviso legal Politica de privacidad Quienes Somos Contacto Politica
              de cookies Declaracion de privacidad
            </p>
          </div>
          <div>
            <ul className="flex justify-center text-white gap-3 mt-3">
              {/* <li>
               
                <FaWhatsapp
                  className="cursor-pointer hover:text-dark"
                  size={30}
                />
              </li> */}
              <li>
              <a target="_blank" href="https://www.instagram.com/raffle.ve/">
              <IoLogoInstagram
                  className="cursor-pointer hover:text-dark"
                  size={30}
                />
              </a>
              </li>
              {/* <li>
                <CiFacebook
                  className="cursor-pointer hover:text-dark"
                  size={30}
                />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
