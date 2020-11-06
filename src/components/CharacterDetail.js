import React, { useEffect } from 'react';
import{Button,Card,CardActionArea,CardMedia,
    CardContent,Typography,CardActions} from '@material-ui/core';
 

 function CharacterDetail(props){
   
     useEffect(()=>{
  
       if (!props.location.state){
       
            props.history.push("/"); 
       }
    },[])
  
    return(
   
    <Card className="CardDetail">
         {props.location.state?    
    <CardActionArea>
        <CardMedia
        component="img"
        alt={props.location.state.item.name}
        height="300"
        width="320"
        image={props.location.state.item.thumbnail.path+'.'+props.location.state.item.thumbnail.extension}
        title={props.location.state.item.name}
        >
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                { props.location.state.item.name} 
            </Typography>
        </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </CardActionArea> 
        :''}   
    </Card>
    )

 }   

 export default CharacterDetail;