import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
// import { HashLink } from 'react-router-hash-link';
import { Link, animateScroll as scroll } from "react-scroll";

const pages = [
  {
    name: "Home",
    route: "Home-toggler",
  },
  {
    name: "Services",
    route: "Services-toggler",
  },
  {
    name: "Features",
    route: "Features-toggler",
  },
  {
    name: "Reviews",
    route: "Reviews-toggler",
  },
  {
    name: "Pricing",
    route: "Pricing-toggler",
  },
  {
    name: "Register",
    route: "Register-toggler",
  },

  // "Home",
  // "Services",
  // "Features",
  // "Reviews",
  // "Pricing",
  // "Register",
];
const social = [
  <TwitterIcon sx={{ color: "#00acee" }} />,
  <InstagramIcon sx={{ color: "#8a3ab9" }} />,
  <FacebookRoundedIcon sx={{ color: "#3b5998" }} />,
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  // position: 'absolute',
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchEl, setSerchEl] = React.useState(false);

  const displaySearch = () => {
    setSerchEl(true);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "15px" }}>
        <AppBar position="fixed" elevation={0}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h1"
                noWrap
                component="a"
                href="/"
                color="secondary"
                sx={{
                  mr: 2,
                  display: { flexGrow: 1 },
                  // fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  // color: "inherit",
                  textDecoration: "none",
                }}
              >
                Beraw.
              </Typography>
              {/* <HashLink smooth to="/page#home">Link to Hash Fragment</HashLink> */}
              {/* <Link
                activeClass="active"
                to="toggler"
                smooth={true}
                offset={-100}
                duration={500}
              >
                {" "}
                goto
              </Link> */}

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {social.map((item, index) => (
                  <IconButton key={index} size="large" aria-label="Example">
                    {item}
                  </IconButton>
                ))}
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page,index) => (
                  <Button
                    color="secondary"
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block", textTransform: "none" }}
                  >
                    <Link
                activeClass="active"
                to={page.route}
                smooth={true}
                offset={-100}
                duration={1000}
              >
               {page.name}
              </Link>
                    {/* {page.name} */}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page,index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon onClick={displaySearch} />
                </SearchIconWrapper>
              </Search>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}

// <AppBar position="static"  color="primary">
//         <Toolbar>

//           <Typography variant="h1" component="div" color="secondary" sx={{ flexGrow: 1 }}>
//             Beraw.
//           </Typography>
//           <Button  variant="h2" sx={{textTransform : "none"}} >Home</Button>

//         </Toolbar>
//       </AppBar>
