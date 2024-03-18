/* eslint-disable react/prop-types */
import {Box,Typography} from "@mui/material";
import pizza from "../assets/delivery.avif";
import Ecom from "../assets/ecomm.png";
import location from "../assets/locs.webp";
import CarddProject from "./CarddProject";

const Projects = ({projectRef}) => {
  return (
    <Box p={"0.85rem"} mt={"0.6rem"} ref={projectRef}>
      <Typography
        variant="h5"
        ml={"0.95rem"}
        fontWeight={"700"}
        fontFamily={"monospace"}
        color={"primary"}
      >
        Projects
      </Typography>
      <Box display={"flex"} gap={"2rem"} mt={"0.5rem"} p={"1.1rem"} justifyContent={"center"} flexWrap={"wrap"}>
        <CarddProject img={pizza} Title={"React Pizza Co."} body={"Pizza Delivery App Made With React,Redux,Tailwind and Used API for Data"} to={"https://react-pizaa-app.vercel.app/"}/>
        <CarddProject img={Ecom} Title={"Ecommerce App"} body={"Ecommerce App.React,Redux,Material UI,Jwt & Auth,Node,Express and Payment Integration with Stripe"}/>
        <CarddProject img={location} Title={"WordWise App"} body={"React,Css.. App that Keep track of Your Trips"}/>
      </Box>
    </Box>
  );
}

export default Projects
