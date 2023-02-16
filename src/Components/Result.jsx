import Box from "@mui/material/Box";
import MainHeading from "./Heading/MainHeading";
import ResultData from "./Heading/ResultData";
import Grid from "@mui/material/Grid";

function Result() {
  return (
    <Box
      sx={{
        // margin:'5% 0 5% 0 ',
        display: "flex",
        flexDirection: "column",
        padding: "35px",

        // justifyContent:'center'
      }}
    >
      <Box sx={{ texAlign: "center", flex: "1" }}>
        <MainHeading type="main" align="true">
          Results.
        </MainHeading>
        <MainHeading type="sub" align="true">
          Lorem ipsum dolor simet banter.
        </MainHeading>
        <MainHeading type="para" align="true">
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
          <ResultData />
        </Grid>
      </Box>
    </Box>
  );
}

export default Result;
