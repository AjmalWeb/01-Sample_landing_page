import Box from "@mui/material/Box";
import MainHeading from "./Heading/MainHeading";

import Button from "@mui/material/Button";

function Register() {
  return (
    <Box id="Register-toggler"
      sx={{
        backgroundImage: "url(./images/bg-04.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
           paddingTop: "6%",
           paddingBottom: "5%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <MainHeading type="main" align="true">
          Turn Your Business Into A Profit Machine.
        </MainHeading>
        <MainHeading type="sub" align="true">
          Lorem ipsum dolor simet banter.
        </MainHeading>
        <MainHeading type="para" align="true">
          Use the Feedback button at the bottom of the page to let us know how
          we can make it even better.
        </MainHeading>
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
          Register Now
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
