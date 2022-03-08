import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#1F1B2E'
    },
    primary: {
      main: '#664eff'
    },
    secondary: {
      main: '#6c4eb3'
    }
  },
  status: {
    danger: '#141120',
  },
});

export { theme };
