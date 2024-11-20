import React, { useEffect, useState } from "react";
import { IItemCarousel } from "../../../interface/ICarousel";
import Tickets from "../Tickets/Tickets";
import { LayoutContent } from "../LayoutContent/LayoutContent";
import { getLowestPrice } from "../../../services/awards";

interface CarouselDetailsProps {
  dataTest: IItemCarousel[];
}

const AwardDetails: React.FC<CarouselDetailsProps> = () => {
  const [dataFooter, setDataFooter] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAwards = async () => {
    setLoading(true);
    const mostRecent = await getLowestPrice();
    setDataFooter(mostRecent);
    setLoading(false);
  };
  useEffect(() => {
    loadAwards();
  }, []);

  return (
    <>
      <div className="flex justify-center gap-2">
        <div className="w-[50%] h-[200px]">
          <img
            src={""}
            alt={""}
            className="w-full h-full object-cover sm:object-contain"
          />
        </div>
        <div className="w-[40%]">
          <h2 className="text-dark font-bold text-xl">
            {"carouselItem.title"}
          </h2>
          <p>Precio: ${"carouselItem.price"}</p>
          <p className="text-dark">Descripción: {"carouselItem.description"}</p>
          <p className="text-dark"> Fecha: {"carouselItem.date"}</p>
        </div>
      </div>
      <LayoutContent
        title="Tickets"
        dataFooter={dataFooter}
        loading={loading}
        titleFooter="Relacionados con tu busqueda"
      >
        <div className="max-h-[500px] overflow-y-auto custom-scrollbar ">
          <Tickets />
        </div>
      </LayoutContent>
    </>
  );
};

export default AwardDetails;
