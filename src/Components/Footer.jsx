import FooterHeading from "./Heading/FooterHeading";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import {
  FaInstagram,
  FaPinterestP,
  FaFacebookF,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";

import { CiLocationOn, CiMail } from "react-icons/ci";
import { HiSupport, HiPhone } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";

import { Link, animateScroll as scroll } from "react-scroll";

const Social = [
  {
    name: "Facebook",
    icon: <FaFacebookF style={{ color: "#4267B2", marginRight: "15px" }} />,
  },
  {
    name: "Instagram",
    icon: <FaInstagram style={{ color: "#8a3ab9", marginRight: "15px" }} />,
  },
  {
    name: "Pinterest",
    icon: <FaPinterestP style={{ color: "#E60023", marginRight: "15px" }} />,
  },
  {
    name: "Behance",
    icon: <FaBehance style={{ color: "#053eff", marginRight: "15px" }} />,
  },
  {
    name: "Youtube",
    icon: <FaYoutube style={{ color: "#FF0000", marginRight: "15px" }} />,
  },
];

const Sitemap = [
  {
    name: "Home",
    Route: "Home-toggler",
  },
  {
    name: "Features",
    Route: "Features-toggler",
  },
  {
    name: "Pricing",
    Route: "Pricing-toggler",
  },
  {
    name: "Screenshots",
    Route: "Home-toggler",
  },
  {
    name: "Blog",
    Route: "Home-toggler",
  },
];

const Contact = [
  {
    name: "45-50 Bar St. New York",
    icon: <CiLocationOn style={{ color: "#8c8c8c", marginRight: "15px" }} />,
  },
  {
    name: " brand@domain.com",
    icon: <CiMail style={{ color: "#8c8c8c", marginRight: "15px" }} />,
  },
  {
    name: " support@domain.com",
    icon: <HiSupport style={{ color: "#8c8c8c", marginRight: "15px" }} />,
  },
  {
    name: "+00 (123) 456 78 90",
    icon: <HiPhone style={{ color: "#8c8c8c", marginRight: "15px" }} />,
  },
  {
    name: "Sitemap",
    icon: <TiDocumentText style={{ color: "#8c8c8c", marginRight: "15px" }} />,
  },
];

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    //   width: 'auto',
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha("#007bff", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#007bff",
    },
  },
}));

function Footer() {
  return (
    <Box
      sx={{
        paddingLeft: "12%",
        paddingRight: "12%",
        paddingTop: "150px",
        paddingBottom: "150px",
        display: "block",
        // height: "100%",
        // width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            sx={{
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
            <FooterHeading type="main">Beraw</FooterHeading>
            <FooterHeading type="side">
              Stay updated by subscribing to our newsletter. We do not spam or
              send unimportant stuff.
            </FooterHeading>
            <FormControl
              variant="standard"
              sx={{ width: { xs: "50%", md: "70%" } }}
            >
              <BootstrapInput
                placeholder="Email"
                id="bootstrap-input"
                type="email"
                sx={{ margin: "0 0 25px 0" }}
              />
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
                SUBSCRIBE
              </Button>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
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
            <FooterHeading type="main">Social</FooterHeading>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-around",
              }}
            >
              {Social.map((item, index) => (
                <FooterHeading key={index} type="sub">
                  {item.icon}
                  {item.name}
                </FooterHeading>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
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
            <FooterHeading type="main">Sitemap</FooterHeading>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-around",
              }}
            >
              {Sitemap.map((item, index) => (
                <FooterHeading key={index} type="sub">
                  <Link
                    activeClass="active"
                    to={item.Route}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    // href=""
                  >
                    {item.name}
                  </Link>
                </FooterHeading>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
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
            <FooterHeading type="main">Contact</FooterHeading>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-around",
              }}
            >
              {Contact.map((item, index) => (
                <FooterHeading key={index} type="sub">
                  {/* <Link
                    activeClass="active"
                    to={item.Route}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                  > */}
                  {item.icon}
                  {item.name}
                  {/* </Link> */}
                </FooterHeading>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
