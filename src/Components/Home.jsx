import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import MainHeading from "./Heading/MainHeading";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    //   width: 'auto',
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha("#007bff", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#007bff",
    },
  },
}));

function Home() {
  return (
    <Box id='Home-toggler'
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "15px",
        margin: "7vw",
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingRight: "15px",
          paddingLeft: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
        }}
      >
        <MainHeading type="main">Grow Your Business Now.</MainHeading>

        <MainHeading type="sub">Welcome to beraw studio.</MainHeading>

        <MainHeading type="para">
          Use the Feedback button at the bottom of the page to let us know how
          we can make it even better.
        </MainHeading>

        <FormControl
          variant="standard"
          sx={{ width: { xs: "50%", md: "70%" } }}
        >
          <BootstrapInput
            placeholder="Email"
            id="bootstrap-input"
            type="email"
            sx={{ margin: "0 0 25px 0" }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              letterSpacing: "4px",
              background: "#525fe6",
              borderColor: "#525fe6",
              color: "#fff",
              fontSize: "14px",
              padding: "10px 35px 10px 37px",
              
            }}
          >
            SUBSCRIBE
          </Button>
        </FormControl>
      </Box>
      <Box sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
        <img
          src="./images/bg-01.png"
          alt="bg image"
          style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
}

export default Home;
