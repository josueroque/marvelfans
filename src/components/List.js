import React, {Fragment, useEffect,useMemo } from 'react';
import{Grid,Typography,Button } from '@material-ui/core';
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


    const backToList=()=>{
        props.history.push("/characters");
    }
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
                <Typography gutterBottom variant="h4" component="h4" bold>
                    {props.location.state.listType }
                </Typography>
                {props.location.state.listType==="Comics"?
                    props.location.state.item.comics.items.map(item=>
                        <div>{item.name}</div>
                    )
                    :
                    props.location.state.item.stories.items.map(item=>
                        <div>{item.name}</div>
                    )
                } 
                <br />
                <Button className="DetailButton" onClick={backToList} color="primary" variant="contained">Back to List</Button>
            </div>    
       
        </Grid>

        </Fragment>
    )


 }   

 export default CharacterDetail;