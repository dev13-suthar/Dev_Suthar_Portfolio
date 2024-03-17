/* eslint-disable react/prop-types */
import {Box,Typography,Button} from "@mui/material";
import headerPic from "../assets/header-img.svg"

const AboutMe = ({isNonMobileScreen}) => {
  return (
    <Box mt={"0.8rem"} p={"0.4rem"} display={"flex"} gap={"5px"} flexDirection={!isNonMobileScreen?"column":"unset"}>
        <Box p={"1.6rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
            <Typography variant="h3" mb={"0"} p={"0"}>Hii Im Dev Suthar,</Typography>
            <Typography variant="h5" width={"60%"}>Part Time <span style={{
                color:"rgb(138,138,231)"
            }}>Student</span>, Full time <span style={{
                color:"rgb(138,138,231)"
            }}>Web Developer</span></Typography>
            <Button  sx={{border:"1px solid",mt:"0.8rem"}}>Contact Me &rarr;</Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <img id="animate_icon" src={headerPic} height={isNonMobileScreen?"80%":"55%"} width={isNonMobileScreen?"70%":"45%"} alt="" srcSet="" />
        </Box>
    </Box>
  )
}

export default AboutMe
