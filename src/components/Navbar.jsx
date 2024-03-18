import {Box,Typography,Divider,useMediaQuery} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// eslint-disable-next-line react/prop-types
const Navbar = ({isNonMobileScreen,onScroll}) => {
  const isSuperSmallScreen = useMediaQuery("(min-width:410px)");
  const handleClick = (to)=>{
      window.open(to,'_blank');
  }

  return (
    <Box flexBasis={"21%"} p={!isSuperSmallScreen?"0.11rem":"0.85rem"} maxHeight={"500px"} position={isNonMobileScreen?"sticky":"static"} top={"12px"} display={isNonMobileScreen?"block":"flex"} alignItems={"center"} justifyContent={"space-between"} mb={!isNonMobileScreen?"1rem":"0"} backgroundColor={"rgb(28,27,35)"} borderRadius={isNonMobileScreen?"8px":"0"}>
       {/* First Box for General Info */}
       <Box p={"0.15rem"} display={"flex"} flexDirection={isNonMobileScreen?"column":"row"} gap={isNonMobileScreen?"0.7rem":"1rem"}>
          {isSuperSmallScreen && (
            <Box  display={"flex"} p={isNonMobileScreen?"0.4rem":"0"} ml={isNonMobileScreen?"2rem":"0"} alignItems={"center"} gap={"0.44rem"} sx={{cursor:"pointer"}}>
            <HomeIcon/>
            <Typography variant={isNonMobileScreen?'h6':'h7'}>Home</Typography>
        </Box>
          )}
          <Box onClick={()=>onScroll()} display={"flex"} p={isNonMobileScreen?"0.4rem":"0"} ml={isNonMobileScreen?"2rem":"0"} alignItems={"center"} gap={"0.44rem"}  sx={{cursor:"pointer"}}>
              <WidgetsIcon/>
              <Typography variant={isNonMobileScreen?'h6':'h7'}>Projects</Typography>
          </Box>
      </Box>
      {isNonMobileScreen && (
        <Divider sx={{
          "&":{
            backgroundColor:"blueviolet"
          }
        }}/>
      )}
        {/* Social BOX */}
        <Box mt={isNonMobileScreen?"2rem":"0"} mb={isNonMobileScreen?"3rem":"0"} p={"0.15rem"} display={"flex"} flexDirection={isNonMobileScreen?"column":"row"} gap={isNonMobileScreen?"0.7rem":"1.64rem"}>
        {isNonMobileScreen && <Typography variant="h5" mb={"10px"} fontWeight={"300"} color={"primary"}>Socials:</Typography>}
        <Box onClick={()=>handleClick('https://www.instagram.com/ugh_devsuthar')} display={"flex"} p={isNonMobileScreen?"0.4rem":"0"} ml={isNonMobileScreen?"2rem":"0"} alignItems={"center"} gap={"0.44rem"}  sx={{cursor:"pointer"}}>
             <InstagramIcon sx={{
              color :"rgb(143,24,127)"
             }}/>
              {isNonMobileScreen && (
                <Typography variant="h6">Instagram</Typography>
              )}
          </Box>
          <Box onClick={()=>handleClick('https://twitter.com/@DevSuthar1262')} display={"flex"} p={isNonMobileScreen?"0.4rem":"0"} ml={isNonMobileScreen?"2rem":"0"} alignItems={"center"} gap={"0.44rem"}  sx={{cursor:"pointer"}}>
             <XIcon sx={{
              color :"rgb(42, 95, 255)"
             }}/>
              {isNonMobileScreen && (
                <Typography variant="h6">Twitter</Typography>
              )}
          </Box>
          <Box onClick={()=>handleClick('https://github.com/dev13-suthar')} display={"flex"} p={isNonMobileScreen?"0.4rem":"0"} ml={isNonMobileScreen?"2rem":"0"} alignItems={"center"} gap={"0.44rem"} sx={{cursor:"pointer"}}>
             <GitHubIcon sx={{
              color :"rgb(42,157,143)"
             }}/>
              {isNonMobileScreen && (
                <Typography variant="h6">Github</Typography>
              )}
          </Box>
          <Box onClick={()=>handleClick('http://linkedin.com/in/dev-suthar-8b7a71295')} display={"flex"} p={isNonMobileScreen?"0.4rem":"0"} ml={isNonMobileScreen?"2rem":"0"} alignItems={"center"} gap={"0.44rem"}  sx={{cursor:"pointer"}}>
             <LinkedInIcon sx={{
              color :"rgb(138, 138, 231)"
             }}/>
              {isNonMobileScreen && (
                <Typography variant="h6">Linkedin</Typography>
              )}
          </Box>
        </Box>
    </Box>
  )
}

export default Navbar
