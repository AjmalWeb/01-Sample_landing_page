import Box from "@mui/material/Box";
import MainHeading from "./Heading/MainHeading";
import Button from "@mui/material/Button";
const logoStyle = {
  width: "20%",
  opacity: "0.5",
  maxWidth: "100%",
  height: "auto",
  verticalAlign: "middle",
};

function Trustworthy() {
  return (
    <Box
      sx={{
        margin:'5% 0 5% 0 ',
        display: "flex",
        flexDirection: { md: "row"},
        padding: "35px",
      }}
    >
      <Box
        sx={{
            display: { xs: "none", md: "flex" } ,
          flex: 1,
          padding: "0 35px 0 35px",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
        }}
      >
        <img
          src="./images/bg-03.png"
          alt="bg image"
          style={{
            maxWidth: "75%",
            height: "auto",
            objectFit: "contain",
            verticalAlign: "middle",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          paddingRight: "25px",
          paddingLeft: "25px",
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
        <MainHeading type="main">We're Trustworthy.</MainHeading>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <img style={logoStyle} src="./images/01.png" alt="bg image" />
          <img style={logoStyle} src="./images/05.png" alt="bg image" />
          <img style={logoStyle} src="./images/07.png" alt="bg image" />
        </Box>
        <MainHeading type="sub">Lorem ipsum dolor simet banter.</MainHeading>
        <MainHeading type="para">
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
          SEE OUR OPTIONS
        </Button>
      </Box>
    </Box>
  );
}

export default Trustworthy;
