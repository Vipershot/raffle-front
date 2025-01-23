import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RaffleWinners } from "../../../interface/awards";
import { getWinner } from "../../../services/awards";
import useCountdown from "../../../hooks/useCountdown";
import Confetti from "react-confetti";

const formatTime = (seconds: number) => {
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return { hours, minutes, secs };
};

const Lottery = () => {
  const { id } = useParams();
  const [award, setAward] = useState<RaffleWinners | null>(null);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const { isCountdownActive, timer } = useCountdown(new Date(endDate));
  const [showConfetti, setShowConfetti] = useState(false);
  const [winnerSelected, setWinnerSelected] = useState(false);

  useEffect(() => {
    getWinner(id as string).then((award: RaffleWinners) => {
      setAward(award);
      setEndDate(award.endDate);
    });
  }, [id]);

  useEffect(() => {
      if (Number(timer) <= 0) {
        setShowConfetti(true);
        setWinnerSelected(true);
        getWinner(id as string).then((award: RaffleWinners) => {
          setAward(award);
          setEndDate(award.endDate);
        });
      }
    
  }, [timer, isCountdownActive]);

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[100%] overflow-hidden">
      {showConfetti && <Confetti style={{ width: "100%", height: "100%" }} />}
      <h1 className="text-[24px] md:text-[30px] text-center">{award?.title}</h1>
      <div className="w-[200px] h-auto md:w-[300px] overflow-hidden my-4">
        <img src={award?.cover} alt="" />
      </div>
      {isCountdownActive && !winnerSelected ? (
        <>
          <h2 className="text-[22px] md:text-[28px] text-center text-primary font-bold">
            Tiempo para sortear al ganador:
          </h2>
     {award?.endDate &&     <p className="text-[20px] md:text-[26px]">
            <span className="text-primary">{formatTime(timer).hours}</span>{" "}
            <span>Hora</span>
            <span className="text-primary">
              {" "}
              {formatTime(timer).minutes}
            </span>{" "}
            <span>Minuto</span>
            <span className="text-primary"> {formatTime(timer).secs}</span>{" "}
            <span>Segundos</span>
          </p>}
        </>
      ) : winnerSelected ? (
        <>
          <h2 className="text-[22px] md:text-[28px] text-center text-primary font-bold">
            Ganador seleccionado
          </h2>
          <p className="md:text-[26px] text-[20px]">Número de ticket ganador</p>
          <p className="md:text-[28px] text-[20px] mt-6 font-bold text-primary bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center">
            {award && award.winnerTickets.map(item => item.ticketNumber)}
          </p>
        </>
      ) : (
        <>
          <p className="text-[20px] md:text-[26px]">
            {!isCountdownActive ? "No hay sorteo hoy" : ""}
          </p>
        </>
      )}
    </div>
  );
};

export default Lottery;
