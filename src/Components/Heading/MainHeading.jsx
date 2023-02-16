import Typography from "@mui/material/Typography";

function MainHeading(props) {
  let customstyle = {};
  if (props.type == "main") {
    customstyle = {
      fontWeight: "800",
      color: "#232323",
      fontSize: "75px",
      lineHeight: "1.1",
      margin: "0px 0px 25px",
      textTransform: 'capitalize',
      textAlign: { xs: "center", md: "left" },
      fontFamily: "Manrope ,sans-serif",
    };
  } else if (props.type == "sub") {
    customstyle = {
      fontWeight: "600",
      color: "#525fe6",
      fontSize: "33px",
      lineHeight: "1.3",
      margin: "0px 0px 25px",
      textTransform: 'none',
      textAlign: { xs: "center", md: "left" },
      fontFamily: "Manrope ,sans-serif",
    };
  } else if (props.type == "para") {
    customstyle = {
      fontWeight: "400",
      color: "#585858",
      fontSize: "1.125rem",
      lineHeight: "1.5",
      margin: "0px 0px 25px",
      textTransform: 'none',
      textAlign: { xs: "center", md: "left" },
      fontFamily: "Manrope, sans-serif",
    };
  }
  if (props.align){
    customstyle={...customstyle,textAlign:'center'}
  } 
  return <Typography sx={customstyle}>{props.children}</Typography>;
}

export default MainHeading;
