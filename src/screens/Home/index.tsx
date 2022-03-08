import { Stack } from "@mui/material";
import { HomeCountdown } from "../../components/Home/Countdown";

function ScreensHome() {
  return (
    <Stack
      height="100%"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <HomeCountdown />
    </Stack>
  );
}

export default ScreensHome;
