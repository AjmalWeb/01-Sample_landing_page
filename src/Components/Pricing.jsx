import Box from "@mui/material/Box";
import MainHeading from "./Heading/MainHeading";
import PricingData from "./Heading/PricingData";
import PricingData2 from "./Heading/PricingData2";

function Pricing() {
  return (
    <>
      <div id="Pricing-toggler">
        <Box
          sx={{
            // margin:'5% 0 5% 0 ',
            display: "flex",
            flexDirection: "column",
            padding: "35px",
            margin: "7vw",
            // justifyContent:'center'
          }}
        >
          <Box sx={{ texAlign: "center", flex: "1" }}>
            <MainHeading type="main" align="true">
              Pricing.
            </MainHeading>
            <MainHeading type="sub" align="true">
              Lorem ipsum dolor simet banter.
            </MainHeading>
            <MainHeading type="para" align="true">
              Use the Feedback button at the bottom of the page to let us know
              how we can make it even better.
            </MainHeading>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                xl: "row",
                lg: "row",
                md: "column",
              },
            }}
          >
            <Box sx={{ flex: "1", paddingRight: "15px", paddingLeft: "15px" }}>
              <PricingData />
            </Box>
            <Box
              sx={{
                flex: "1",
                paddingRight: "15px",
                paddingLeft: "15px",
                justifyItems: "center",
              }}
            >
              <PricingData2 />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Pricing;
