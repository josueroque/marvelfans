import React,{useEffect} from 'react';
import Menu from './Menu';
import{useSelector,useDispatch} from 'react-redux';
import{getStoriesAction} from '../store/actions/stories';
import{getComicsAction} from '../store/actions/comics';

function Home(){
    const dispatch=useDispatch();
    const getStories=(filter)=>dispatch(getStoriesAction(filter));
    const getComics=(filter)=>dispatch(getComicsAction(filter));

    // useEffect(()=>{
    //     getComics({});
    //     getStories({});
    // },[])
    return(
       <Menu></Menu>
    )
}

export default Home;