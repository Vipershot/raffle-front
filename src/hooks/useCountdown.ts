import { useState, useEffect } from "react";

const useCountdown = (endDate: Date) => {
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [timer, setTimer] = useState(1000);
  useEffect(() => {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();
    const hoursLeft = diff / (1000 * 60 * 60);
    if (hoursLeft <= 24) {
      setIsCountdownActive(true);
      if(diff > 0){
        setTimer(diff / 1000);
      }
    } else {
      setIsCountdownActive(false);
    }
  }, [endDate]);

  useEffect(() => {
    if (isCountdownActive) {
      const interval = setInterval(() => {
          setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isCountdownActive]);

  return { isCountdownActive, timer };
};

export default useCountdown;
