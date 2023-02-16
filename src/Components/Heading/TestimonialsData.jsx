import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ModeIcon from "@mui/icons-material/Mode";

const data = [
  {
    name: "Jack Doe",
    position: "CEO of X Corp.",
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="./images/ava01.jpg"
        sx={{ width: 56, height: 56 }}
      />
    ),
    Testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
  },
  {
    name: "Francis Lewis",
    position: "Owner of Jobla",
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="./images/ava02.jpg"
        sx={{ width: 56, height: 56 }}
      />
    ),
    Testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
  },
  {
    name: "Louise Nando",
    position: "Executive Of Harlon",
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="./images/ava03.jpg"
        sx={{ width: 56, height: 56 }}
      />
    ),
    Testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
  },
  {
    name: "Jack Doe",
    position: "CEO of X Corp.",
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="./images/ava04.jpg"
        sx={{ width: 56, height: 56 }}
      />
    ),
    Testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
  },
  {
    name: "Francis Lewis",
    position: "Owner of Jobla",
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="./images/ava05.jpg"
        sx={{ width: 56, height: 56 }}
      />
    ),
    Testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
  },
  {
    name: "Louise Nando",
    position: "Executive Of Harlon",
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="./images/ava06.jpg"
        sx={{ width: 56, height: 56 }}
      />
    ),
    Testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
  },
];

function TestimonialsData() {
  return data.map((item, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={3} lg={4}>
        <Box
          
          sx={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            padding: "50px",
          }}
        >
          <ModeIcon sx={{ color: "#525fe6", fontSize: "2rem" }} />
          <Typography
            sx={{
              margin: " 0 0 25px ",
              lineHeight: "1.5",
              color: "#585858",
              fontWeight: "400",
            }}
          >
            {item.Testimonial}
          </Typography>
          {item.avatar}
          <Typography
            sx={{
              marginTop: "20px",
              fontWeight: "700",
              color: "#444444",
              fontSize: "18px",
              lineHeight: "26px",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              margin: "0 0 25px",
              lineHeight: "1.5",
              color: "#585858",
              fontWeight: "400",
            }}
          >
            {item.position}
          </Typography>
        </Box>
      </Grid>
    );
  });
}

export default TestimonialsData;
