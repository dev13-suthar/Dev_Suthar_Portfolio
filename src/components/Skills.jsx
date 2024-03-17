import {Box,useMediaQuery,Typography} from "@mui/material";

const Skills = () => {
  const isSmallScreenDisplay = useMediaQuery("(min-width:625px)")
  return (
    <Box p={"0.85rem"}>
        <Typography variant="h5" ml={"0.95rem"} fontWeight={"700"} fontFamily={"monospace"} color={"primary"}>What i Know !!</Typography>
        <Box p={"0.7rem"} display={"flex"} gap={"2rem"} justifyContent={"center"} flexDirection={!isSmallScreenDisplay?"column":""}>
            {/* First Box Frontend */}
            <Box p={"0.7rem"} height={!isSmallScreenDisplay?"max-content":"200px"} width={!isSmallScreenDisplay?"100%":"180px"} backgroundColor={"rgb(28,27,35)"} borderRadius={"11px"}>
                <h3 style={{color:"rgb(139,138,145)",margin:"0",padding:"0"}}>Frontend</h3>
                <Box display={"flex"} gap={"15px"} mt={"0.5rem"} padding={"10px"} flexWrap={"wrap"}>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #3498db",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>HTML</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #e74c3c",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>CSS</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #f39c12",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Js</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #1abc9c",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Tailwind</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #2980b9",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>React</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #f1c40f",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Material Ui</span>
            </Box>
            </Box>
            <Box p={"0.7rem"} height={!isSmallScreenDisplay?"max-content":"200px"} width={!isSmallScreenDisplay?"100%":"180px"} backgroundColor={"rgb(28,27,35)"} borderRadius={"11px"}>
                <h3 style={{color:"rgb(139,138,145)",margin:"0",padding:"0"}}>Backend</h3>
                <Box display={"flex"} gap={"15px"} mt={"0.5rem"} padding={"10px"} flexWrap={"wrap"}>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #3498db",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Node Js</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #e74c3c",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Express</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #f39c12",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Auth & JWT</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #f39c12",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Rest Apis</span>  
            </Box>
            </Box>
            <Box p={"0.7rem"} height={!isSmallScreenDisplay?"max-content":"200px"} width={!isSmallScreenDisplay?"100%":"180px"} backgroundColor={"rgb(28,27,35)"} borderRadius={"11px"}>
                <h3 style={{color:"rgb(139,138,145)",margin:"0",padding:"0"}}>Databse</h3>
                <Box display={"flex"} gap={"15px"} mt={"0.5rem"} padding={"10px"} flexWrap={"wrap"}>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #3498db",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Sql</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #e74c3c",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>Relational DB</span>
                <span style={{padding:"7px",width:"max-content",border:"1px solid #1abc9c",borderRadius:"9px",fontSize:"13px",color:"rgb(117, 103, 186)"}}>MongoDb</span>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Skills
