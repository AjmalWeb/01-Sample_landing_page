import MainHeading from "./Heading/MainHeading";
import Box from "@mui/material/Box";
import FeaturesData from "./Heading/FeaturesData";
function Features() {
  return (
    <Box id="Features-toggler"
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
          justifyContent: "center",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
        }}
      >
        <MainHeading type="main">Features.</MainHeading>
        <MainHeading type="sub">Lorem ipsum dolor simet.</MainHeading>
        <MainHeading type="para">
          Use the Feedback button at the bottom of the page to let us.
        </MainHeading>
        <Box>
          <FeaturesData />
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
        {" "}
        <img
          src="./images/bg-07.png"
          alt="bg image"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            verticalAlign: "middle",
          }}
        />
      </Box>
    </Box>
  );
}

export default Features;
