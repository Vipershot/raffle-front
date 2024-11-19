import React from 'react';
import { useParams } from 'react-router-dom';
import { IItemCarousel } from '../../../interface/ICarousel';

interface CarouselDetailsProps {
  dataTest: IItemCarousel[];
}

const CarouselDetails: React.FC<CarouselDetailsProps> = ({ dataTest }) => {
  const { id } = useParams<{ id: string }>();

  const carouselItem = dataTest.find(item => item.id === id);

  if (!carouselItem) {
    return <div>No se encontró el carusel con el id proporcionado</div>;
  }

  return (
    <div>
      <h2>{carouselItem.title}</h2>
      <p>Precio: ${carouselItem.price}</p>
      <p>Descripción: {carouselItem.description}</p>
      <p> Fecha: {carouselItem.date}</p>
      <img src={carouselItem.imgUrl} alt={carouselItem.title} />
    </div>
  );
};

export default CarouselDetails;
