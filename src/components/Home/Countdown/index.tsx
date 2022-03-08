import { Box, Button, CircularProgress, Stack } from "@mui/material";
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

  const percentValue = 100 - (100 * (secondsAmount % 60)) / 60;
  console.log(percentValue);

  const handleClear = () => {
    setStartCountdown(false);
    setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
  };

  return (
    <>
      <Box
        sx={{ position: "relative", display: "inline-flex", marginBottom: 4 }}
      >
        <CircularProgress
          variant="determinate"
          value={percentValue}
          size="large"
          sx={{
            width: 200,
          }}
        />
        <CircularProgress
          variant="determinate"
          value={100}
          size="large"
          sx={{
            position: "absolute",
            width: 200,
            color: (theme) => theme.status.danger,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box display="flex" alignItems="center" fontSize="2.5rem">
            <div>{minutes}</div>
            <div>:</div>
            <div>{seconds}</div>
          </Box>
        </Box>
      </Box>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => setStartCountdown(true)}
          disabled={startCountdown}
        >
          Iniciar
        </Button>
        <Button
          variant="contained"
          onClick={() => setStartCountdown(false)}
          disabled={!startCountdown}
        >
          Pausar
        </Button>
        <Button
          variant="contained"
          onClick={handleClear}
          disabled={secondsAmount === COUNTDOWN_INITIAL_TIME_IN_SECONDS}
        >
          Reiniciar
        </Button>
      </Stack>
    </>
  );
};
export { HomeCountdown };
