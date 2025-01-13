import { useEffect, useState } from "react";
import { FormPayment } from "../../molecules/FormPayment/FormPayment";
import { IMethodPay } from "../../../interface/metodsPayment";
import { useLocation, useNavigate } from "react-router-dom";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { IAward } from "../../../interface/awards";
import { postBuyTicket } from "../../../services/awards";
import AppModal from "../../atoms/AppModal/AppModal";
import { BiLoader } from "react-icons/bi";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";

interface ECustomError extends Error {
  response: { data: { message: string } };
}

export const Payment = () => {
  const [dataPayment, setDataPayment] = useState<IMethodPay>();
  const { state } = useLocation();
  const [message, setMessage] = useState({
    title: "titulo",
    icon: <BiLoader className="inline-block ml-2 text-info" />,
    description: "descripcion",
    onClick: () => {},
  });
  const { ticketsSelected, award } = state;
  const awardDetail: IAward = award;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDataPayment = (data: IMethodPay) => {
    setDataPayment(data);
  };

  const priceInBolivars =
  award.ticketPriceBCV * ticketsSelected.length

  const handlePay = async (data: IMethodPay) => {
    try {
      const ticketId = await postBuyTicket(award.id, {
        ...data,
        ticketNumbers: ticketsSelected,
      });
      setIsModalOpen(true);

      setMessage({
        title: "¡Felicidades! Tu pago sera procesado.",
        icon: (
          <IoCheckmarkCircleOutline
            size={25}
            className="inline-block ml-2 text-online"
          />
        ),
        description:
          "¡Tu boleto para la rifa ha sido comprado! Gracias por tu compra. ¡Buena suerte en el sorteo!",
        onClick: () => {
          navigate("/");
        },
      });
    } catch (error) {
      const { response } = error as ECustomError;
      setIsModalOpen(true);

      setMessage({
        title: "Pago con error",
        icon: (
          <MdOutlineErrorOutline
            size={30}
            className="inline-block ml-2 text-red"
          />
        ),
        description: response.data.message,
        onClick: () => {
          setIsModalOpen(false);
        },
      });
      console.error("Error al comprar ticket:", error);
    }
  };


  return (
    <>
      <div className="w-full md:max-w-xl mx-auto p-6 bg-white mt-5">
        <div className="mb-6">
          <TitleText text="Detalle de selección" />
          <h2 className="text-sm text-gray-600">
            Información de tickets seleccionados
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-2">
          <div className="w-[200px] h-[200px]">
            <img
              src={awardDetail.cover}
              alt={awardDetail.title}
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>
          <div className="flex flex-col justify-between md:h-full">
            <div>
              <p className="text-dark max-w-xs">
                Precio de ticket:{" "}
                <b className="text-primary">${awardDetail.ticketPrice}</b>
              </p>
              <p className="text-dark max-w-xs">
                Total de tickets seleccionados:{" "}
                <b className="text-primary">{ticketsSelected.length}</b>
              </p>

              <p className="text-dark max-w-xs flex flex-wrap gap-1 mb-2">
                Número de Tickets seleccionados:{" "}
                {Array.isArray(ticketsSelected) &&
                  ticketsSelected.map((item, index) => (
                    <b
                      key={index}
                      className="text-white bg-primary text-center text-sm"
                      style={{
                        borderRadius: "30px",
                        padding: "2px 5px",
                      }}
                    >
                      {item}
                    </b>
                  ))}
              </p>
            </div>
            <div>
              {ticketsSelected.length > 0 && (
                <p className=" my-1">
                  <span className="font-bold text-primary rounded text-sm md:text-xl">
                    Total Bs.F{" "}
                    {(award.ticketPriceBCV * ticketsSelected.length).toFixed(2)} / ${" "}
                    {(
                      Number(award.ticketPrice) * ticketsSelected.length
                    ).toFixed(2)}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <FormPayment
        priceInBolivars={priceInBolivars}
        handleDataPayment={handleDataPayment}
        paymentAmount={ticketsSelected.length}
        ticketPrice={Number(awardDetail.ticketPrice)}
        count={ticketsSelected.length}
        handlePay={handlePay}
      />
      <div>
        <AppModal
          open={isModalOpen}
          title={
            <>
              {message.icon} {message.title}
            </>
          }
        >
          <div className="space-y-4">
            <p className="text-dark">{message.description}</p>

            <AppButton
              size="full"
              onClick={message.onClick}
              title="Confirmar"
            />
          </div>
        </AppModal>
      </div>
    </>
  );
};
