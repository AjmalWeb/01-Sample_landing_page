import Typography from "@mui/material/Typography";

function FooterHeading(props) {
  let customStyle = {};
  if (props.type == "main") {
    customStyle = {
      fontWeight: "700",
      color: "#525fe6",
      fontSize: "18px",
      lineHeight: "26px",
      margin: " 0px 0px 25px",
      padding: "0px",
      letterSpacing: "0",
      fontFamily: "Manrope, sans-serif",
    };
  } else if (props.type == "sub") {
    customStyle = {
      fontWeight: "400",
      color: "#232323",
      fontSize: "1.125rem",
      lineHeight: "1.5",
      margin: " 0px 0px 25px",
      padding: "0px",
      letterSpacing: "0",
      fontFamily: "Roboto, sans-serif",
      cursor:'pointer'
    };
  } else if (props.type == "side") {
    customStyle = {
      fontWeight: "400",
      color: "#444444",
      fontSize: "1.125rem",
      lineHeight: "1.5",
      margin: " 0px 0px 25px",
      padding: "0px",
      letterSpacing: "0",
      fontFamily: "Roboto, sans-serif",
    };
  }

  return <Typography sx={customStyle}>{props.children}</Typography>;
}

export default FooterHeading;
