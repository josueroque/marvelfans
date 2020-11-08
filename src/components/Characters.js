import React,{Fragment, useEffect, useState} from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Grid,TextField,Button} from '@material-ui/core';
import{getCharactersAction} from '../store/actions/characters';
import{getStoriesAction} from '../store/actions/stories';
import{getComicsAction} from '../store/actions/comics';
import CardItem from './CardItem';
import Loader from './Loader';
import Alert from './Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Menu from './Menu';


function Characters(props){ 

    const dispatch=useDispatch();
    const getCharacters=(filter)=>dispatch(getCharactersAction(filter));
    const getStories=(filter)=>dispatch(getStoriesAction(filter));
    const getComics=(filter)=>dispatch(getComicsAction(filter));
    const characters=useSelector(state=>state.characters.characters);
    const stories =useSelector(state=>state.stories.stories);
    const comics =useSelector(state=>state.comics.comics);
    const loading =useSelector(state=>state.characters.loading);
    const error=useSelector(state=>state.characters.error);
    const [name,setName]=useState(null);
    const [comic,setComic]=useState(null);
    const [story,setStory]=useState(null);
    const storiesList = {
        options: stories,
        getOptionLabel: (option) => option.title,
      };
      const comicsList = {
        options: comics,
        getOptionLabel: (option) => option.title,
      };

    useEffect(()=>{
      
        getComics({});
        getCharacters({});
        getStories({});
    },[])
    
    useEffect(()=>{
       console.log(story);
        let comicValue=comic ?comic.id:null;
        let storyValue=story ?story.id:null;
        if (name||comic||story ) getCharacters({name:name,comics:comicValue,stories:storyValue});
    },[name,comic,story])

    const reset=()=>{
        setStory(null);
        setName(null);
        setComic(null);
        getCharacters({});
    }

    const handleChange=(event)=>{

        switch (event.target.name){
            case 'name':{
                setName(event.target.value);
                break;
            }

            default:{
                break;
            }
        }
      
    }
console.log(name);
    return (
                 
            <Fragment>
             <Menu></Menu>
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

                      <Autocomplete
                        {...comicsList}
                        id="story"
                        value={comic}
                        className="SearchText" 
                        onChange={(event, newValue) => {
                        setComic(newValue);
                        }}
                            renderInput={(params) =>
                            <TextField 
                                {...params} 
                                key={params.id}
                                type="search" 
                                variant="filled"
                                label="Search by Comic"
                                
                            
                            />}
                         />                
                </Grid>
                      <Autocomplete
                        {...storiesList}
                        id="story"
                        value={story}
                        className="StorySearch"
                        onChange={(event, newValue) => {
                        setStory(newValue);
                        }}
                            renderInput={(params) =>
                            <TextField 
                                {...params} 
                                key={params.id}
                                type="search" 
                                variant="filled"
                                label="Search by Story"
                                
                            
                            />}
                         />
            

             <Button className="ClearButton" onClick={reset} color="primary" variant="contained">Clear </Button>
            <Grid className="Grid" >
                { error===true?
                        <Alert className="Alert" severity='error'>
                            {'Error loading data!'}
                        </Alert>
                        :''  
                }
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
