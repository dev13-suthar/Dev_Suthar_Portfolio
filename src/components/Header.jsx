/* eslint-disable react/prop-types */
import {Box,Button} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const Header = ({
  isNonMobileScreen
}) => {
  return (
    <Box display={"flex"} p={isNonMobileScreen?"1.33rem":"0.55rem"} mb={isNonMobileScreen?"0":"10px"} justifyContent={"space-between"} alignItems={"center"}>
        <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
            <Box height={"1rem"} width={"1rem"} borderRadius={"50%"} backgroundColor={"rgb(25,118,210)"}></Box>
            <Box height={"1rem"} width={"1rem"} borderRadius={"50%"} backgroundColor={"rgb(25,118,210)"}></Box>
        </Box>
        <Button  sx={{border:'1px solid'}}>Contact Me <PersonIcon/></Button>
    </Box>
  )
}

export default Header
