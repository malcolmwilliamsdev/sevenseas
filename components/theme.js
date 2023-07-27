import { createTheme } from "@mui/material/styles";

// Your theme options
const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#033b73",
    },
    secondary: {
      main: "#f50057",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 500,
      laptop: 1200,
      desktop: 1350,
    },
  },
};

// Create the theme
export const theme = createTheme(themeOptions);
