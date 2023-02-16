import {useEffect} from 'react';
import Box from "@mui/material/Box";
import MainHeading from "./Heading/MainHeading";
import TestimonialsData from "./Heading/TestimonialsData";
import Grid from "@mui/material/Grid";



function Testimonials() {

  // console.log("props ::: ", props.rgh)

  // const scrolling = () => {
  //   console.log("scrolling")
  //   window.scrollTo({
  //     top: props.rgh.current?.offsetTop,
  //     behavior: 'smooth',
  //   });
  // }

  // useEffect(() => {
  //   scrolling();
  // },[])

    return ( 
        <Box id="Reviews-toggler" sx={{
            // margin:'5% 0 5% 0 ',
            display: "flex",
            flexDirection: "column",
            padding: "35px",
            // justifyContent:'center'
          }}>
        <Box sx={{ texAlign: "center", flex: "1" }}>
        <MainHeading type="main" align="true">
        Testimonials.
        </MainHeading>
        <MainHeading type="sub" align="true">
          Lorem ipsum dolor simet banter.
        </MainHeading>
        <MainHeading type="para" align="true">
          Use the Feedback button at the bottom of the page to let us know how
          we can make it even better.
        </MainHeading>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
           <Grid container spacing={2}>
          <TestimonialsData />
        </Grid>
        </Box>
        </Box>
     );
}

export default Testimonials;