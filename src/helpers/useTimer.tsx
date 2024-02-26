import { useEffect, useState } from "react";

type TUseTimer = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type TUseCounter = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  round: number;
}

const formatNumber = (num: number) => {
  return num < 10 ? `0${num}` : `${num}`;
};

const DAYS_IN_MS = 1000 * 60 * 60 * 24;
const HOURS_IN_MS = 1000 * 60 * 60;
const MIN_IN_MS = 1000 * 60;
const SEC_IN_MS = 1000;

const getTimeDiff = (diffInMSec: number): TUseTimer => {
  let diff = diffInMSec;
  const days = Math.floor(diff / DAYS_IN_MS); // Give the remaining days
  diff -= days * DAYS_IN_MS; // Subtract passed days
  const hours = Math.floor(diff / HOURS_IN_MS); // Give remaining hours
  diff -= hours * HOURS_IN_MS; // Subtract hours
  const minutes = Math.floor(diff / MIN_IN_MS); // Give remaining minutes
  diff -= minutes * MIN_IN_MS; // Subtract minutes
  const seconds = Math.floor(diff / SEC_IN_MS); // Give remaining seconds
  return {
    days: formatNumber(days), // Format everything into the return type
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};

const useTimer = (targetTime: number): TUseCounter => {
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      // We can set conditions here like timeLeft > 0
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1000);
      } else {
        setTimeLeft(1000 * 10);
        setCounter(counter+1);
      }
      
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
    
  // return getTimeDiff(timeLeft);
  return {
    days: getTimeDiff(timeLeft).days,
    hours: getTimeDiff(timeLeft).hours,
    minutes: getTimeDiff(timeLeft).minutes,
    seconds: getTimeDiff(timeLeft).seconds,
    round: counter
  }

};
export default useTimer;