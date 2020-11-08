import React,{Fragment, useEffect, useState} from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Grid,TextField,Button} from '@material-ui/core';
import{getCharactersAction} from '../store/actions/characters';
import CardItem from './CardItem';
import Loader from './Loader';


function Characters(props){ 

    const dispatch=useDispatch();
    const getCharacters=(filter)=>dispatch(getCharactersAction(filter));
    const characters=useSelector(state=>state.characters.characters);
    const loading =useSelector(state=>state.characters.loading);
    const error=useSelector(state=>state.characters.error);
    const [name,setName]=useState(null);
    const [comics,setComics]=useState(null);
    const [stories,setStories]=useState(null);
    //const charactersList=use

    useEffect(()=>{
        getCharacters({});
    },[])
    
    useEffect(()=>{
        getCharacters({name,comics,stories});
    },[name,comics,stories])

    const handleChange=(event)=>{
        switch (event.target.name){
            case 'name':{
                setName(event.target.value);
                break;
            }
            case 'comics':{
                setComics(event.target.value);
                break;
            }
            case 'stories':{
                setStories(event.target.value);
                break;
            }
            default:{
                break;
            }
        }
        console.log(event.target.name);
        

    }
    

    return (
        <Fragment>

            <Grid className="FilterGrid">
                <TextField 
                    className="SearchText" 
                    id="name"
                    name="name"
                    label="Filter by name" 
                    type="search" 
                    variant="filled"
                    value={name}
                    onChange={handleChange}
                />
                <TextField 
                    className="SearchText" 
                    id="comics"
                    name="comics"
                    label="Filter by comics" 
                    type="search" 
                    variant="filled"
                    value={comics}
                    onChange={handleChange}
                />
                <TextField 
                    className="SearchText" 
                    id="stories"
                    name="stories"
                    label="Filter by stories" 
                    type="search" 
                    variant="filled"
                    value={stories}
                    onChange={handleChange}
                />
                <Button color="primary" variant="contained">Clear </Button>
            </Grid>
            <Grid className="Grid" >

                {loading===true?<Loader className="Loader">  </Loader>:
                    characters.length>0? characters.map(item=>
                        <Link className="Link"  to={{
                            pathname: `/characters/${item.id}` , 
                            state:{  
                               item:item,
                            }

                         }}> 
                            <CardItem   key={item.id} values={item}  ></CardItem>
                        </Link>    
                    ):''
                }
            </Grid>
        </Fragment>
    );
}

export default Characters;
