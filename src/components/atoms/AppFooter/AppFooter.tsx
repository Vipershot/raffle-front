import { Link } from "react-router-dom";
import { TitleText } from "../TitleText/TitleText";

export const AppFooter = () => {
  return (
    <Link to="/">
      <div className="h-60 bg-info flex flex-col gap-5 md:flex-row md:justify-between   justify-between  items-start p-10 ">
        <TitleText text={""} color="light" />
        <div className="mt-2 mb-2">
          <h4 className="font-bold text-white text-sm md:text-md">Acerca de</h4>
          <ul className="flex gap-1 mt-1 text-black  text-sm md:text-md">
            <li className="flex items-center gap-1">Raffle</li>
          </ul>
        </div>
        <div className="mt-2 mb-2">
          <h4 className="font-bold text-white text-sm md:text-md">
            Otros sitios
          </h4>
          <ul className="flex gap-1 mt-1 text-black  text-sm md:text-md">
            <li className="flex items-center gap-1">Desarrolladores</li>
          </ul>
        </div>
        <div className="mt-2 mb-2">
          <h4 className="font-bold text-white text-sm md:text-md">Ayuda</h4>
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">Comprar</li>
          </ul>
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">Vender</li>
          </ul>
        </div>
        <div className="mt-2 mb-2">
          <h4 className="font-bold text-white text-sm md:text-md">
            Redes sociales
          </h4>
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">X</li>
          </ul>
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">TikTok</li>
          </ul>
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">Instagram</li>
          </ul>
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">Facebook</li>
          </ul>
        </div>
        <div className="mt-2 mb-2">
          <h4 className="font-bold text-white text-sm md:text-md">Mi cuenta</h4>
          <Link to="/login">
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">Ingresa </li>
          </ul>
          </Link>
          <Link to="/register">
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">Registrarte</li>
          </ul>
          </Link>
          <ul className="flex gap-1 mt-1 text-black text-sm md:text-md">
            <li className="flex items-center gap-1">Compras</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
