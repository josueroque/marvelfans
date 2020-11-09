import React from 'react';
import{Button,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link } from 'react-router-dom';
 function CardItem(props){
   
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
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