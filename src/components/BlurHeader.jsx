import {Box,Typography,useMediaQuery} from "@mui/material";
import pic from "../assets/uidraw.svg"
const BlurHeader = () => {
  const isSmallMobileScreen = useMediaQuery("(min-width:570px)");
  const isVerySmallMobileScreen = useMediaQuery("(min-width:410px)");
  const navigateToUrl = ()=>{
    window.open('https://twitter.com/@DevSuthar1262','_blank');
  }
  return (
    <Box p={"0.6rem 0.95rem"} display={"flex"} justifyContent={"space-between"}  flexDirection={!isVerySmallMobileScreen?"column":""}   height={!isVerySmallMobileScreen?"199":"140px"} alignItems={!isVerySmallMobileScreen?"center":undefined} sx={{
        position: "relative",
        backgroundImage: "url(https://images.pexels.com/photos/17985038/pexels-photo-17985038/free-photo-of-cityscape-with-skyscrapers-and-residential-buildings-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            filter: "blur(4px)", // Add this line to blur the background image
        },
    }}>
      <Box zIndex={9999} display={"flex"} gap={!isVerySmallMobileScreen?"14px":""} justifyContent={"space-between"}  alignItems={"center"}>
        <img src={pic} height={isSmallMobileScreen?"100%":"52%"} width={isSmallMobileScreen?"100%":"50%"} alt="" srcSet="" />
        <Box width={"250px"} display={"flex"}flexDirection={"column"} gap={"1px"}>
          <Typography variant="h5">Dev Suthar</Typography>
          <Typography color={"primary"}>@Dev_Codes</Typography>
        </Box>
      </Box>
      <Box  mt={!isVerySmallMobileScreen?"12px":""} zIndex={9999} display={"flex"} alignItems={"center"} sx={{cursor:"pointer"}} onClick={()=>navigateToUrl()}>
        <span style={{backgroundColor:"rgb(28,27,35)",padding:"0.8rem",borderRadius:"14px",color:"rgb(111,110,117)"}}>Let&apos;s Connect</span>
      </Box>
    </Box>
  )
}

export default BlurHeader
