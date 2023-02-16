import WebAssetIcon from "@mui/icons-material/WebAsset";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import LanguageIcon from "@mui/icons-material/Language";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";

const iconStyle = {
  color: "#525fe6",
  fontSize: "50px",
  // marginBottom:'5px'
};

const countStyle = {
  marginTop: "25px",
  fontWeight: "600",
  color: "#232323",
  fontSize: "33px",
  lineHeight: "1.3",
};

const data = [
  {
    icon: <WebAssetIcon sx={iconStyle} />,
    title: "Applications",
    Count: 699,
  },
  {
    icon: <BubbleChartIcon sx={iconStyle} />,
    title: "Clients",
    Count: 456,
  },
  {
    icon: <LanguageIcon sx={iconStyle} />,
    title: "Websites",
    Count: 150,
  },
  {
    icon: <ShareIcon sx={iconStyle} />,
    title: "Members",
    Count: 600,
  },
];

function ResultData() {
  return data.map((item, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={3}>
        <Box
          
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "50px",
          }}
        >
          {item.icon}
          <Typography sx={countStyle}>
            <CountUp start={0} end={item.Count} duration={2} />
          </Typography>
          ,
          <Typography
            sx={{
              fontWeight: "400",
              lineHeight: "1.5",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.125rem",
              color: "#585858",
              textAlign: "center",
            }}
          >
            {item.title}
          </Typography>
        </Box>
      </Grid>
    );
  });
}

export default ResultData;
