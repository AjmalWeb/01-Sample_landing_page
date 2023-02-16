import MainHeading from "./Heading/MainHeading";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ServicesData from "./Heading/ServiceData";
import Grid from "@mui/material/Grid";

function Services() {
  return (
    <Box  id= 'Services-toggler' sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          paddingRight: "15px",
            paddingLeft: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainHeading type="main">Services.</MainHeading>
        <MainHeading type="sub">Lorem ipsum dolor simet banter.</MainHeading>
        <MainHeading type="para">
          Use the Feedback button at the bottom of the page to let us know how
          we can make it even better.
        </MainHeading>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <ServicesData />
        </Grid>
      </Box>
    </Box>
  );
}

export default Services;
