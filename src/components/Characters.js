import React,{Fragment, useEffect, useState} from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {Grid} from '@material-ui/core';
import CardItem from './CardItem';
import{getCharactersAction} from '../store/actions/characters';

function Characters(props){ 

    const dispatch=useDispatch();
    const getCharacters=()=>dispatch(getCharactersAction());
    const characters=useSelector(state=>state.characters.characters);
    const loading =useSelector(state=>state.characters.loading);
    //const charactersList=use

    useEffect(()=>{
        getCharacters();
    },[])
        
    console.log(characters);
    return (
        <Grid className="Grid">
            {loading===true?<div>Loading...</div>:
                characters.length>0? characters.map(item=>
                <CardItem  key={item.id} values={item} ></CardItem>
                ):''
            }
        </Grid>
    );
}

export default Characters;
