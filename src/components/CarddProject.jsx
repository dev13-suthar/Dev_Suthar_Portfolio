/* eslint-disable react/prop-types */
import {Typography,Card,CardMedia,CardContent,useMediaQuery} from "@mui/material";

const CarddProject = ({img,Title,body,to}) => {
    const isSmallScreenDisplay = useMediaQuery("(min-width:625px)");
    const handleClick = ()=>{
        window.open(to,'_blank');
    }
  return (
    <>
         <Card sx={{ maxWidth: isSmallScreenDisplay?"250px":"350px",cursor:"pointer",flexShrink:"0"}} onClick={()=>handleClick()}>
          <CardMedia component={"img"} height={"150"} image={img} sx={{objectFit:"cover",objectPosition:"center"}} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {body}
            </Typography>
          </CardContent>
        </Card>
    </>
  )
}

export default CarddProject
