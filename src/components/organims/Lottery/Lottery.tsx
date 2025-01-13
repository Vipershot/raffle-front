import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAward } from "../../../interface/awards";
import { getAward } from "../../../services/awards";

const formatTime = (seconds: number) => {
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return { hours, minutes, secs };
};

const Lottery = () => {
  const { id } = useParams();
  const [timer, setTimer] = useState(1);
  const [award, setAward] = useState({} as IAward);

  useEffect(() => {
    getAward(id as string).then((award: IAward) => {
      let test = new Date("2025-01-14T00:00:00Z");
      setAward(award);
      const endDate = new Date(test);
      const now = new Date();
      const isToday = endDate.toDateString() === now.toDateString();
      if (isToday) {
        const diff = endDate.getTime() - now.getTime();
        setTimer(diff / 1000);
      } else {
        setTimer(0);
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[24px] md:text-[30px] text-center">{award.title}</h1>
      <div className="w-[200px] h-auto md:w-[300px] overflow-hidden my-4">
        <img src={award.cover} alt="" />
      </div>
      {timer > 0 ? (
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
