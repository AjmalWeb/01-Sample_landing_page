import Box from "@mui/material/Box";
import MainHeading from "./Heading/MainHeading";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Button from "@mui/material/Button";

function Process() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", sm: "column" },
        padding: "15px",
        // margin: "7vw",
      }}
    >
      <Box
        sx={{
          flex: 2,
          position: "relative",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
        }}
      >
        {" "}
        <img
          src="./images/bg-02.jpg"
          alt="bg image"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            verticalAlign: "middle",
          }}
        />
        <IconButton
          aria-label="upload picture"
          component="label"
          size="large"
          sx={{
            color: "#525fe6",
            position: "absolute",
            top: "50%",
            transform: "translate(-0%, -50%)",
            left: "0",
            right: "0",
          }}
        >
          <PlayCircleFilledIcon sx={{ fontSize: "100px" }} />
        </IconButton>
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
        <MainHeading type="main">The Process.</MainHeading>

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

export default Process;
