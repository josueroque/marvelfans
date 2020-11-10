import React,{Fragment, useEffect, useState,useMemo} from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {Grid,TextField,Button} from '@material-ui/core';
import{getComicsAction} from '../store/actions/comics';
import CardItem from './CardItem';
import Loader from './Loader';
import Alert from './Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InfiniteScroll from "react-infinite-scroll-component";
import Menu from './Menu';

function Comics(props){ 

    const dispatch=useDispatch();
    const getComics=(filter)=>dispatch(getComicsAction(filter));
    const stories =useSelector(state=>state.stories.stories);
    const comics =useSelector(state=>state.comics.comics);
    const formats =useSelector(state=>state.comics.formats);
    const loading =useSelector(state=>state.comics.loading);
    const error=useSelector(state=>state.comics.error);
    const [name,setName]=useState(null);
    const [comic,setComic]=useState(null);
    const [story,setStory]=useState(null);
    const [items,setItems]=useState(comics.slice(0,4));
    const [format,setFormat]=useState([]);
    const formatsList ={
        options: formats,
        getOptionLabel: (option) => option.title,
      };
    
      const comicsList = {
        options: comics,
        getOptionLabel: (option) => option.title,
    };

    useEffect(()=>{
        setItems(comics.slice(0,4));
    },[comics])

    useEffect(()=>{
        console.log(comic);
        let comicValue=comic ?comic.id:null;
        let storyValue=story ?story.id:null;
        if (name||comic||story ) getComics({name:name,comics:comicValue,stories:storyValue});
    },[name,comic,story])

    const getFormats=()=>{

    }

    const fetchMoreData=()=>{
        
        setTimeout(() => {
            setItems(
             (comics.slice(0, items.length+4))
            );
         }, 1500);
         console.log('desde fetch');
         console.log(items);
    };

    const reset=()=>{
        setStory(null);
        setName(null);
        setComic(null);
        getComics({});
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

    const formatsComponent=useMemo(()=>{
        
        return <Autocomplete
        {...formatsList}
        id="format"
        value={format}
        className="SearchText" 
        onChange={(event, newValue) => {
        setFormat(newValue);
        }}
            renderInput={(params) =>
            <TextField 
                {...params} 
                key={params.id}
                type="search" 
                variant="filled"
                label="Filter by format"
                           
            />}
        />  
    },[format,formats])

    const storiesComponent=useMemo(()=>{
   
        return  <Autocomplete
                 {...formatsList}
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
    },[])

    console.log(comics);
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
                   {formatsComponent}
                </Grid>
                   {storiesComponent}

             <Button className="ClearButton" onClick={reset} color="primary" variant="contained">Clear </Button>
             <InfiniteScroll
                      dataLength={items.length}
                      next={fetchMoreData}
                      hasMore={true}
                      loader={loading===false&&items.length<comics.length?<h3 className="ItemsLoader">Loading items...</h3>:''}
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

                            <CardItem   key={item.id} values={item}  itemType="Comic"  ></CardItem>
                         
                    )
                 
                    :''
                  
                }
                 
            </Grid>
            </InfiniteScroll>
            </Fragment>
            

    );
}

export default Comics;
