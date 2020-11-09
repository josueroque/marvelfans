import React, {Fragment, useEffect,useMemo } from 'react';
import{Grid,Typography } from '@material-ui/core';
import Menu from './Menu';

 function CharacterDetail(props){
   
     useEffect(()=>{
  
       if (!props.location.state){
       
            props.history.push("/"); 
       }
    },[])

    const memoMenu=useMemo(()=>{
        return <Menu></Menu>
    }
    ,[])

  console.log(props);
    return(
        <Fragment>
        {memoMenu}
        <Grid className="GridDetail">
            <img 
                className="ImgDetail"
                alt={props.location.state.item.name} 
                src={props.location.state.item.thumbnail.path+'.'+props.location.state.item.thumbnail.extension}>
            </img>
            <div className="DivDetail">    
                <Typography gutterBottom variant="h3" component="h2">
                    {props.location.state.item.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3" >
                    Description: {props.location.state.item.description?props.location.state.item.description:"Not available"}
                </Typography>
            </div>    
      
        </Grid>
        </Fragment>
    )
    // <Card className="CardDetail">
    //      {props.location.state?    
    // <CardActionArea>
    //     <CardMedia
    //     component="img"
    //     alt={props.location.state.item.name}
    //     height="300"
    //     width="320"
    //     image={props.location.state.item.thumbnail.path+'.'+props.location.state.item.thumbnail.extension}
    //     title={props.location.state.item.name}
    //     >
    //     </CardMedia>
    //     <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //             { props.location.state.item.name} 
    //         </Typography>
    //     </CardContent>
    //         <CardActions>
    //             <Button size="small" color="primary">
    //             Share
    //             </Button>
    //             <Button size="small" color="primary">
    //             Learn More
    //             </Button>
    //         </CardActions>
    //     </CardActionArea> 
    //     :''}   
    // </Card>
    // )

 }   

 export default CharacterDetail;