import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Routes } from "./routes/index.routes";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
