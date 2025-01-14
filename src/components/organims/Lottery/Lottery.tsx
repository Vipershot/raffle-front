import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAward } from "../../../interface/awards";
import { getAward } from "../../../services/awards";
import useCountdown from "../../../hooks/useCountdown";

const formatTime = (seconds: number) => {
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return { hours, minutes, secs };
};

const Lottery = () => {
  const { id } = useParams();
  const [award, setAward] = useState({} as IAward);
  const [endDate, setEndDate] = useState(new Date("2025-01-15T00:00:00Z"));
  const { isCountdownActive, timer } = useCountdown(endDate);

  useEffect(() => {
    getAward(id as string).then((award: IAward) => {
      setAward(award);
      setEndDate(new Date("2025-01-15T00:00:00Z"));
    });
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[24px] md:text-[30px] text-center">{award.title}</h1>
      <div className="w-[200px] h-auto md:w-[300px] overflow-hidden my-4">
        <img src={award.cover} alt="" />
      </div>
      {isCountdownActive ? (
        <>
          <h2 className="text-[22px] md:text-[28px] text-center text-primary font-bold">
            Tiempo para sortear al ganador:
          </h2>
          <p className="text-[20px] md:text-[26px]">
            <span className="text-primary">{formatTime(timer).hours}</span>{" "}
            <span>Hora</span>
            <span className="text-primary">
              {" "}
              {formatTime(timer).minutes}
            </span>{" "}
            <span>Minuto</span>
            <span className="text-primary"> {formatTime(timer).secs}</span>{" "}
            <span>Segundos</span>
          </p>
        </>
      ) : (
        <p className="text-[20px] md:text-[26px]">No hay sorteo hoy</p>
      )}
    </div>
  );
};

export default Lottery;
