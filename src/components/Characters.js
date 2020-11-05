import React,{Fragment, useEffect, useState} from 'react';
import {getCharacters} from '../services/apiService';
import{Button,Grid,Card,CardActionArea,CardMedia,
      CardContent,Typography,CardActions} from '@material-ui/core';

function Characters(props){ 

    const [characters,setCharacters]=useState([]);

    useEffect(()=>{
        getAllCharacters();
    },[])
    
    const getAllCharacters=async()=>{
        const response = await getCharacters();
        setCharacters(response.data.data.results);
    
    }
    console.log(characters);
    return (
        <Grid className="Grid">
            {characters.length>0? characters.map(item=>
            <Card key={item.id} className="Card">
            <CardActionArea>
                <CardMedia
                component="img"
                alt={item.name}
                height="180"
                width="320"
                image={item.thumbnail.path+'.'+item.thumbnail.extension}
                title={item.name}
                >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
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
            ):''}
        </Grid>
    );
}

export default Characters;
