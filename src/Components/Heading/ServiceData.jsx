import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DatasetIcon from "@mui/icons-material/Dataset";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import DnsIcon from "@mui/icons-material/Dns";
import ShareIcon from "@mui/icons-material/Share";
import Grid from "@mui/material/Grid";

const data = [
  {
    icon: <DatasetIcon />,
    title: "Database",
    Details:
      "Nulla vitae elit libero elit non porta gravida eget metus cras egestas.",
  },
  {
    icon: <CloudDoneIcon />,
    title: "Cloud Storage",
    Details:
      "Nulla vitae elit libero elit non porta gravida eget metus cras egestas.",
  },
  {
    icon: <DnsIcon />,
    title: "Server Tools",
    Details:
      "Nulla vitae elit libero elit non porta gravida eget metus cras egestas.",
  },
  {
    icon: <ShareIcon />,
    title: "Group Work",
    Details:
      "Nulla vitae elit libero elit non porta gravida eget metus cras egestas.",
  },
];

function ServiceData() {
  return data.map((item,index) => {
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
          <Typography
            sx={{
              marginTop: "25px",
              fontWeight: "700",
              color: "#444444",
              fontSize: "18px",
              lineHeight: "26px",
              textAlign: "center",
              margin: "0px 0px 25px",
            }}
          >
            {item.title}
          </Typography>
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
            {item.Details}
          </Typography>
        </Box>
      </Grid>
    );
  });
}

export default ServiceData;
