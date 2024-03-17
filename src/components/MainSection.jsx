/* eslint-disable react/prop-types */
import {Box,Divider} from "@mui/material";
import BlurHeader from "./BlurHeader";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects"
import MoreProjects from "./MoreProjects";


// eslint-disable-next-line no-unused-vars
const MainSection = ({isNonMobileScreen,projectRef}) => {

  return (
    <Box flexBasis={"77%"} p={"0.55rem"} display={"block"}>
       <BlurHeader/>
       <Divider/>
       <AboutMe isNonMobileScreen={isNonMobileScreen}/>
       <Divider sx={{
          "&":{
            backgroundColor:"blueviolet"
          }
        }}/>
        <Skills/>
        <Projects projectRef={projectRef}/>
        <MoreProjects/>
    </Box>
  )
}

export default MainSection
