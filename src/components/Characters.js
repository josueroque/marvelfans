import React,{Fragment, useEffect, useState,useMemo} from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {Grid,TextField,Button} from '@material-ui/core';
import{getCharactersAction} from '../store/actions/characters';
import CardItem from './CardItem';
import Loader from './Loader';
import Alert from './Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InfiniteScroll from "react-infinite-scroll-component";
import Menu from './Menu';


function Characters(props){ 

    const dispatch=useDispatch();
    const getCharacters=(filter)=>dispatch(getCharactersAction(filter));
    const characters=useSelector(state=>state.characters.characters);
    const stories =useSelector(state=>state.stories.stories);
    const comics =useSelector(state=>state.comics.comics);
    const loading =useSelector(state=>state.characters.loading);
    const error=useSelector(state=>state.characters.error);
    const [name,setName]=useState(null);
    const [comic,setComic]=useState(null);
    const [story,setStory]=useState(null);
    const [items,setItems]=useState(characters.slice(0,4));
    
    const storiesList ={
        options: stories,
        getOptionLabel: (option) => option.title,
      };
    
      const comicsList = {
        options: comics,
        getOptionLabel: (option) => option.title,
    };

    useEffect(()=>{
        setItems(characters.slice(0,4));
    },[characters])

    useEffect(()=>{
        console.log(comic);
        let comicValue=comic ?comic.id:null;
        let storyValue=story ?story.id:null;
        if (name||comic||story ) getCharacters({name:name,comics:comicValue,stories:storyValue});
    },[name,comic,story])

    const fetchMoreData=()=>{
        
        setTimeout(() => {
            setItems(
             (characters.slice(0, items.length+4))
            );
         }, 1500);
         console.log('desde fetch');
         console.log(items);
    };

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

    const memoMenu=useMemo(()=>{
        return <Menu></Menu>
    }
    ,[])

    const comicsComponent=useMemo(()=>{
        
        return <Autocomplete
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
    },[comic,comics])

    const storiesComponent=useMemo(()=>{
   
        return  <Autocomplete
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
    },[story,stories])

    return (
                 
            <Fragment >
      
            {memoMenu}
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
                   {comicsComponent}
                </Grid>
                   {storiesComponent}

             <Button className="ClearButton" onClick={reset} color="primary" variant="contained">Clear </Button>
             <InfiniteScroll
                      dataLength={items.length}
                      next={fetchMoreData}
                      hasMore={true}
                      loader={loading===false&&items.length<characters.length?<h3 className="ItemsLoader">Loading items...</h3>:''}
             >
            <Grid className="Grid">
                { error===true?
                        <Alert className="Alert" severity='error'>
                            {'Error loading data!'}
                        </Alert>
                        :''  
                }

                {loading===true?<Loader className="Loader">  </Loader>:

                    items.length>0?

                    items.map(item=>

                            <CardItem   key={item.id} values={item} itemType="Character" ></CardItem>
                         
                    )
                 
                    :''
                  
                }
                 
            </Grid>
            </InfiniteScroll>
            </Fragment>
            

    );
}

export default Characters;
