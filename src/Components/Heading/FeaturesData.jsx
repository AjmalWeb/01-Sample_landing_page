import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridViewIcon from '@mui/icons-material/GridView';
import SatelliteIcon from '@mui/icons-material/Satellite';

const data = [
    {
      icon: <GridViewIcon sx={{marginRight:'5px'}}/>,
      title: " Database Support",
      Details:
        "The page to let us know how we can make it even better.",
    },
    {
      icon: <SatelliteIcon sx={{marginRight:'5px'}}/>,
      title: "Server Support",
      Details:
        "The page to let us know how we can make it even better.",
    },
]

function FeaturesData() {
    return ( 
            data.map((item,index)=>{
            return(
                <Box key={index} sx={{
                    display: "flex",
                    
                   justifyContent: "center",
                 alignItems: "flex-start",
                    flexDirection: "column",
                margin:'40px'
                  }}>
                   
                    <Typography sx={{
              marginTop: "25px",
              fontWeight: "700",
              color: "#444444",
              fontSize: "18px",
              lineHeight: "26px",
              textAlign: "center",
              margin: "0px 0px 25px",
            }}> {item.icon}{item.title}</Typography>
                    <Typography sx={{
              fontWeight: "400",
              lineHeight: "1.5",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.125rem",
              color: "#585858",
              textAlign: "center",
            }}>{item.Details}</Typography>
                </Box>
                
            )
        })

     );
}

export default FeaturesData;