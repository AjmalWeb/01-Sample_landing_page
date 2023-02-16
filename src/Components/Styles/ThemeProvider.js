import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#ffffff",
  secondary: "#444444",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    fontFamily: "Manrope",

    h1: {
      fontFamily: "Manrope",
      fontSize: 22,
      fontWeight: 550,
    },
    h2: {
      fontFamily: "Manrope",
      fontSize: 20,
      fontWeight: 700,
    },
  },

  components: {
    MuiButton: {
      style: {
        textTransform: "none",
      }
    },
  },
});

export default theme;
