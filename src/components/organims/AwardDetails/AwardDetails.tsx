import React, { useEffect, useState } from "react";
import Tickets from "../../molecules/Tickets/Tickets";
import { LayoutContent } from "../../molecules/LayoutContent/LayoutContent";
import { getLowestPrice, getAward } from "../../../services/awards";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { useNavigate, useParams } from "react-router-dom";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { IAward } from "../../../interface/awards";
import { getDayComplete } from "../../../utils/date";
import { IoIosArrowUp } from "react-icons/io";
import createNumbersArray from "../../../utils/numbersArray";
import { IoIosArrowDown } from "react-icons/io";
import { Legend } from "../../molecules/Legend/Legend";
import AppModal from "../../atoms/AppModal/AppModal";
import { Loader } from "../../atoms/Loader/Loader";
import Rule from "../../molecules/RuleComponent/Rule";
import  faq  from "../../../assets/faq.svg";

const AwardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [showAlert, setShowAlert] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [award, setAward] = useState<IAward | null>(null);
  const [totalTickets, setTotalTickets] = useState<
    { state: boolean; number: number }[] | null
  >(null);
  const [ticketsSelected, setTicketsSelected] = useState<number[]>([]);
  const [dataFooter, setDataFooter] = useState([]);

  const [modalDetail, setModalDetail] = useState(false);
  const [modalRules, setModalRules] = useState(false)


  const loadAwards = async () => {
    setLoading(true);
    try {
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(id as string)) {
        throw new Error("ID inválido");
      }

      const mostRecent = await getLowestPrice();
      const awardDetail: IAward = await getAward(id as string);
      const numbers = createNumbersArray(awardDetail.totalTickets);
      const numbersState = numbers.map((item) => ({
        state: false,
        number: item,
      }));
      setTotalTickets(numbersState);
      setAward(awardDetail);
      setDataFooter(mostRecent);
    } catch (error) {
      console.error(error);
      navigate("/404");
    } finally {
      setLoading(false);
    }
  };

  const handleTickets = (newTicket: number) => {
    if (!ticketsSelected.includes(newTicket)) {
      setTicketsSelected([...ticketsSelected, newTicket]);
    } else {
      const popTicket = ticketsSelected.filter((item) => item !== newTicket);
      setTicketsSelected(popTicket);
    }
  };

  useEffect(() => {
    setTotalTickets(null);
    setTicketsSelected([]);
    loadAwards();
  }, [id]);

  if (loading) return <Loader/> ;

  if (!award) return <h1>No se encontró el premio</h1>;

  return (
    <>
    {loading ? <Loader/> : <>
      {award ? (
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-5">
            <div className="h-[200px] md:h-[400px] w-[100%] md:w-[50%]">
              <img
                src={award?.cover}
                alt={award?.title}
                className="w-full h-full object-contain mt-4"
              />
              <AppModal width="w-[40rem]" open={modalRules} title="Reglas" children={<Rule/>} onClose={() => setModalRules(false)}/>
            </div>
            <div className="w-[100%] md:w-[50%] flex flex-col items-center p-2 mt-6 md:mt-0 mb-2">
              <div className="w-[90%] flex flex-col gap-2">
                <h2 className="font-bold text-[16px] md:text-xl">
                  {award?.title}
                </h2>
                <p className="text-dark font-bold text-[13px] md:text-[18px]">
                  Fecha: {getDayComplete(award.endDate)}
                </p>
                <p className="text-dark text-[13px] font-bold md:text-[16px]">
                  Precio: ${award?.ticketPrice}
                </p>
                <p className="text-dark text-[13px] font-bold md:text-[16px]">
                  Precio: BsF. {award?.ticketPriceBCV}
                </p>
                <p className="text-dark text-[13px] md:text-[16px]">
                  Descripción: {award?.description}
                </p>
              </div>
            </div>
          </div>
          <LayoutContent
            title="Tickets"
            dataFooter={dataFooter}
            loading={loading}
            titleFooter="Relacionados con tu búsqueda"
          >
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
              <div>
               <Legend />
              </div>
              <div className="mt-2 flex items-center">
              <img src={faq} alt="" />
                <p className="ml-1 text-sm md:text-md">
                  <a 
                    onClick={() => setModalRules(true)} 
                    className="text-primary hover:text-black cursor-pointer"
                  >
                    Reglas del sorteo
                  </a>
                </p>
              </div>
            </div>
            <div className="max-h-[500px] overflow-y-auto custom-scrollbar flex justify-between">
              {award.tickets && totalTickets && (
                <Tickets
                  onClick={handleTickets}
                  ticketsBuy={award?.tickets.map((item) =>
                    Number(item.ticketNumber)
                  )}
                  totalTickets={totalTickets}
                  handleTickets={(data) => setTotalTickets(data)}
                />
              )}
            </div>
            {modalDetail && ticketsSelected.length !== 0 && (
              <div
                className="w-full bg-white rounded flex flex-col p-6"
                style={{ position: "sticky", bottom: 0 }}
              >
                <TitleText text="Detalle de tickets" />
                <button
                  className="absolute top-2 right-2 text-primary hover:text-info"
                  onClick={() => setModalDetail(false)}
                >
                  <IoIosArrowDown className="text-lg" size={25} />
                </button>
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
                  <div className="w-[200px] h-[200px]">
                    <img
                      src={award.cover}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between md:h-full">
                    <div>
                      <span className="font-bold text-primary  rounded text-sm md:text-xl ">
                        Total Bs.F{" "}
                        {award?.ticketPriceBCV !== undefined ? 
                        (award.ticketPriceBCV * ticketsSelected.length).toFixed(2) : 'N'} / ${" "}
                        {(Number(award.ticketPrice) * ticketsSelected.length).toFixed(2)}
                      </span>
                      <p className="text-dark max-w-xs mt-3">
                        Total de tickets seleccionados:{" "}
                        <b className="text-primary">{ticketsSelected.length}</b>
                      </p>
                      <p className="text-dark max-w-xs flex flex-wrap gap-1 mb-2">
                        Número de Tickets seleccionados:{" "}
                        {ticketsSelected.map((item) => (
                          <b
                            className="text-white bg-primary text-center text-sm"
                            style={{ borderRadius: "30px", padding: "2px 5px" }}
                          >
                            {" "}
                            {item}{" "}
                          </b>
                        ))}
                      </p>
                    </div>
                    <div>
                    {showAlert && (
        <AppModal 
        open
        title={"Para continuar con la compra..."}
       
          onClose={() =>{ 
            
            setShowAlert(false)}}
        >
        <p className="text-dark mb-5">Debes iniciar sesion o registrarte</p>
          <AppButton size="full" title="Iniciar sesion" onClick={()=>{navigate('/login')}}/>
          <div className="mt-2 h-0.5 bg-disabled" ></div>

          <AppButton size="full" appearance="text" title="Registrarse" onClick={()=>{navigate('/register')}}/>
        </AppModal>
      )}
                  <AppButton
                  
                    size="full"
                    title="Comprar"
                    onClick={() => {
                      if(localStorage.getItem('token')){
                        navigate(`/payment/${id}`, {
                          state: { ticketsSelected, award },
                        })
                      }else{
                          setShowAlert(true)
                      }
                    }
                    
                    }
                    
                  
                  
                    
                  />
                   
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!modalDetail && ticketsSelected.length !== 0 && (
              <div
                className="w-full bg-white rounded flex flex-col items-center p-4"
                style={{ position: "sticky", bottom: 0 }}
              >
                <button
                  className="w-full flex justify-center text-primary"
                  onClick={() => setModalDetail(true)}
                >
                  <IoIosArrowUp className="text-lg" size={25} />
                </button>

                <div className="w-full flex flex-wrap justify-center  md:justify-between items-center px-5">
                  <div className="flex space-x-6 gap-5 items-center mb-2">
                    <div className="text-center">
                      <span className="block font-bold text-primary text-lg md:text-xl">
                        {ticketsSelected.length}
                      </span>
                      <span className="block text-sm text-primary">
                        Tickets
                      </span>
                    </div>

                    <div className="text-center">
                      <span className="block font-bold text-primary text-lg md:text-xl">
                      {award?.ticketPriceBCV !== undefined ? 
                      (award.ticketPriceBCV * ticketsSelected.length).toFixed(2) : 'N'} / ${" "}
                      </span>
                      <span className="block text-sm text-primary">Bs.F</span>
                    </div>

                    <div className="text-center">
                      <span className="block font-bold text-primary text-lg md:text-xl">
                        {(
                          Number(award.ticketPrice) * ticketsSelected.length
                        ).toFixed(2)}
                      </span>
                      <span className="block text-sm text-primary">USDT</span>
                    </div>
                  </div>
                 
                  {showAlert && (
        <AppModal 
        open
        title={"Para continuar con la compra..."}
       
          onClose={() =>{ 
            
            setShowAlert(false)}}
        >
        <p className="text-dark mb-5">Debes iniciar sesión o registrarte</p>
          <AppButton size="full" title="Iniciar sesión" onClick={()=>{navigate('/login')}}/>
          <div className="mt-2 h-0.5 bg-disabled" ></div>

          <AppButton size="full" appearance="text" title="Registrarse" onClick={()=>{navigate('/register')}}/>
        </AppModal>
      )}
                  <AppButton
                  
                    size="md"
                    title="Seleccionar método de pago"
                    onClick={() => {
                      if(localStorage.getItem('token')){
                        navigate(`/payment/${id}`, {
                          state: { ticketsSelected, award },
                        })
                      }else{
                          setShowAlert(true)
                      }
                    }
                    
                    }
                    
                  
                  
                    
                  />
                   
                 
    
   
                </div>
              </div>
            )}
          </LayoutContent>
        </div>
      ) : null}
    </>}
    
    </>
  );
};

export default AwardDetails;
