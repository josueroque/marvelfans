import React from 'react';
import{Button,Card,CardActionArea,CardMedia,
    CardContent,Typography,CardActions} from '@material-ui/core';

 function CardItem(props){
     return(
    <Card className="Card">
    <CardActionArea>
        <CardMedia
        component="img"
        alt={props.values.name}
        height="180"
        width="320"
        image={props.values.thumbnail.path+'.'+props.values.thumbnail.extension}
        title={props.name}
        >
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.values.name}
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
    </Card>
    )

 }   

 export default CardItem;