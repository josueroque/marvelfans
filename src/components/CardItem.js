import React from 'react';
import{Button,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions} from '@material-ui/core';
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
                    </Link> 
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.values.name}
                        </Typography>
                    </CardContent>
        
                    <CardActions>
                              
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