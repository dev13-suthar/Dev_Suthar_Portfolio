import {Box,Typography,Divider,useMediaQuery} from "@mui/material"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const MoreProjects = () => {
    const isSmallScreen = useMediaQuery("(min-width:590px)");
  return (
    <Box mt={"1.6rem"} padding={"1rem"} backgroundColor={"rgb(28,27,35)"} borderRadius={"13px"}>
        <Typography variant="h6">More Projects:</Typography>
        <Box display={"flex"} gap={"1rem"} flexDirection={!isSmallScreen?"column":""}>
            <Box display={"flex"} justifyContent={"space-between"}  alignItems={"center"} gap={"1rem"} p={"0.5rem"}>
                <Box display={"flex"} justifyContent={"space-between"} p={"1rem"} alignItems={"center"} gap={"14px"}>
                <span><LiveTvIcon fontSize="medium"/></span>
                <Box>
                    <h4 style={{padding:"0",margin:"0"}}>Movie App</h4>
                    <span style={{color:"rgb(111,110,104)"}}>React,Css,Rest APi</span>
                </Box>
                </Box>
                <span>&rarr;</span>
                <hr style={{height:"100%"}}/>
            </Box>
            {!isSmallScreen && (
                <Divider sx={{
                    "&":{
                        backgroundColor:"blueviolet"
                      }
                }}/>
            )}
            <Box display={"flex"} justifyContent={"space-between"} width={"250px"} alignItems={"center"} gap={"1rem"} p={"0.5rem"}>
                <Box display={"flex"} justifyContent={"space-between"} p={"1rem"} alignItems={"center"} gap={"14px"}>
                <span><FitnessCenterIcon fontSize="medium"/></span>
                <Box>
                    <h4 style={{padding:"0",margin:"0"}}>Mywellness Food & BMI tracker</h4>
                    <span style={{color:"rgb(111,110,104)"}}>React,Css,CssModules and APi from Ninja APIS</span>
                </Box>
                </Box>
                <span>&rarr;</span>
            </Box>
        </Box>
    </Box>
  )
}

export default MoreProjects
