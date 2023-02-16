import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";

const listfontstyle = {
  fontWeight: "400",
  color: "#fff",
  fontSize: "1.125rem",
  lineHeight: "1.5",
  margin: "0px 0px 25px",
};

function PricingData2() {
  return (
    <Box
      sx={{
        padding: "35px",
        backgroundColor: "#525fe6",
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
          xl: "flex-start",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: "800",
          color: "#fff",
          fontSize: "75px",
          lineHeight: "1.1",
          margin: "0px 0px 25px",
        }}
      >
        Free.
      </Typography>
      <Typography
        sx={{
          fontWeight: "600",
          color: "#fff",
          fontSize: "33px",
          lineHeight: "1.3",
          margin: "0px 0px 25px",
        }}
      >
        $19/mo.
      </Typography>
      <Typography sx={listfontstyle}>
        <DoneIcon />
        Downloads.
      </Typography>
      <Typography sx={listfontstyle}>
        <DoneIcon />
        Contents.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          letterSpacing: "4px",
          background: "#fff",
          borderColor: "#525fe6",
          color: "#000",
          fontSize: "14px",
          padding: "10px 35px 10px 37px",
        }}
      >
        Get it now
      </Button>
    </Box>
  );
}

export default PricingData2;
