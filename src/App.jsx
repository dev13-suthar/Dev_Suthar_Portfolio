import { useRef } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Navbarr from "./components/Navbar"
import {Box,useMediaQuery} from "@mui/material";

const App = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:950px)")
  const projectRef = useRef(null);

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Box p={"0.5rem"}>
      <Header isNonMobileScreen={isNonMobileScreen} />
      {/* Layout TWO cols one 20%-80% split */}
      <Box display={isNonMobileScreen?"flex":"block"} gap={"8px"} padding={"5px"}>
        <Navbarr isNonMobileScreen={isNonMobileScreen} onScroll={scrollToProject}/>
        <MainSection isNonMobileScreen={isNonMobileScreen} projectRef={projectRef}/>
      </Box>
    </Box>
  )
}

export default App
