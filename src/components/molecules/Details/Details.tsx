import React from "react";
import { useParams } from "react-router-dom";
import { IItemCarousel } from "../../../interface/ICarousel";
import Tickets from "../Tickets/Tickets";

interface CarouselDetailsProps {
  dataTest: IItemCarousel[];
}

const CarouselDetails: React.FC<CarouselDetailsProps> = ({ dataTest }) => {
  const { id } = useParams<{ id: string }>();

  const carouselItem = dataTest.find((item) => item.id === id);

  if (!carouselItem) {
    return <div>No se encontró el carusel con el id proporcionado</div>;
  }

  return (
    <>
    <div className="flex justify-center gap-2">
      <div className="w-[50%] h-[600px]">
        <img src={carouselItem.imgUrl} alt={carouselItem.title} className="w-full h-full object-cover sm:object-contain"/>
      </div>
      <div className="w-[40%]">
        <h2 className="text-dark font-bold text-xl">{carouselItem.title}</h2>
        <p>Precio: ${carouselItem.price}</p>
        <p className="text-dark">Descripción: {carouselItem.description}</p>
        <p className="text-dark"> Fecha: {carouselItem.date}</p>
      </div>
    </div>
    <Tickets/>
    </>
  );
};

export default CarouselDetails;
