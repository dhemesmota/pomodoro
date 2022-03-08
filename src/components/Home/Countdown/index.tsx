import { useEffect, useState } from "react";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 Minutos

const HomeCountdown = () => {
  const [startCountdown, setStartCountdown] = useState(false);
  const [secondsAmount, setSecondsAmount] = useState(
    COUNTDOWN_INITIAL_TIME_IN_SECONDS
  );

  useEffect(() => {
    if (secondsAmount === 0) {
      return;
    }

    let time: any;
    if (startCountdown) {
      time = setTimeout(() => {
        setSecondsAmount((state) => state - 1);
      }, 1000);
    } else {
      clearTimeout(time);
    }

    return () => {
      clearTimeout(time);
    };
  }, [secondsAmount, startCountdown]);

  const minutes = String(Math.floor(secondsAmount / 60)).padStart(2, "0");
  const seconds = String(secondsAmount % 60).padStart(2, "0");

  const handleClear = () => {
    setStartCountdown(false);
    setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
  };

  return (
    <>
      <section>
        <span>⏱️</span>
        <div>{minutes}</div>
        <div>:</div>
        <div>{seconds}</div>
      </section>

      <div>
        <button
          type="button"
          className="btn"
          onClick={() => setStartCountdown(true)}
          disabled={startCountdown}
        >
          Iniciar
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setStartCountdown(false)}
          disabled={!startCountdown}
        >
          Pausar
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleClear}
          disabled={secondsAmount === COUNTDOWN_INITIAL_TIME_IN_SECONDS}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
};
export { HomeCountdown };
