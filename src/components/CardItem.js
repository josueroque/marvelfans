import React, { useEffect,useState } from 'react';
import{Button,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,IconButton} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'; 
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link } from 'react-router-dom';
 function CardItem(props){
    const [isFavorite, setIsFavorite]=useState(false);
    useEffect(()=>{
        let favorites=[];
        if(localStorage.getItem("favoritesCharacters")) favorites= JSON.parse(localStorage.getItem("favoritesCharacters"));
        if (favorites.includes(props.values.id.toString())) setIsFavorite(true); 

    },[])

   const handleFavorite=(event)=>{

        let favorites2=[];
        if(localStorage.getItem("favoritesCharacters")) favorites2= JSON.parse(localStorage.getItem("favoritesCharacters"));
        if (!favorites2.includes(event.currentTarget.value.toString())) {
            localStorage.setItem("favoritesCharacters", JSON.stringify([...favorites2,event.currentTarget.value]));
            setIsFavorite(true); 
        } else {
            let favorites3=favorites2.filter(i=> { return i!==event.currentTarget.value.toString()});
            localStorage.setItem("favoritesCharacters",JSON.stringify(favorites3));
            setIsFavorite(false); 
        }
        console.log(localStorage.getItem("favoritesCharacters"));
   }
  console.log(props.values.id+" "+isFavorite);
       return(
            <Card className="Card">
                <CardActionArea>
                <Link className="Link"  to={{
                            pathname: `/characters/${props.values.id}` , 
                            state:{  
                               item:props.values,
                            }

                         }}> 
                    <CardMedia
                        component="img"
                        alt={props.values.name}
                        height="180"
                        width="320"
                        image={props.values.thumbnail.path+'.'+props.values.thumbnail.extension}
                        title={props.name}
                    >
                    </CardMedia>
                     {/* <LazyLoadImage
                           alt={props.values.name}
                           height="180"
                           src={props.values.thumbnail.path+'.'+props.values.thumbnail.extension} 
                           width="320"
                    /> */}
                    </Link> 
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.values.name}
                        </Typography>
                    </CardContent>
        
                    <CardActions>
                    
                            <IconButton aria-label="add to favorites"  color ={isFavorite===true?"primary":"grey"} name="prueba" value={props.values.id}  onClick={handleFavorite}>
                                <ThumbUpIcon />
                            </IconButton> 
                        
                        <Button size="small" color="primary">
                         COMICS
                        </Button>
                        <Button size="small" color="primary">
                         STORIES
                        </Button>
                    </CardActions>
                </CardActionArea>  
        </Card>
    )

 }   

 export default CardItem;