import axios from 'axios';
const baseUrl ='https://gateway.marvel.com:443/v1/public/';
const hash='a7b99f5ed0aeb877b0ef442ec312f35d';
const ts='1';
const apiKey='1cb3a2470c17d59344f1fca46ab0e4c9';

export const getCharacters=async(filter)=>{
  
    let queryUrl=`${baseUrl}characters?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=20`;
    if (filter.name){
         queryUrl=`${queryUrl}&nameStartsWith=${filter.name}`;
    }
    if (filter.comics){
        const comic=await getComic(filter.comics);
        if( comic.status===200){
            let comicId;
            if (comic.data.data.results.length>0) comicId=comic.data.data.results[0].id; 
            queryUrl=`${queryUrl}&comics=${comicId}`;
        }
        
    } 
    if (filter.stories) {
        
        const storyId=getStory(filter.stories).results.data.id;
        queryUrl=`${queryUrl}&stories=${filter.stories}`;
    }
   
    const response= await axios.get(queryUrl);
  //  console.log(response);  
    return response;

} 

export const getComics=async()=>{
    let queryUrl=`${baseUrl}comics?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=100`;
    const response= await axios.get(queryUrl);
    return response;  
}

export const getComic=async(comic)=>{
    let queryUrl=`${baseUrl}comics?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=1&&titleStartsWith=${comic}`;
    const response= await axios.get(queryUrl);
    return response;  
}

export const getStory=async(comicId,characterId)=>{
    let queryUrl=`${baseUrl}stories?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=1&&titleStartsWith=${comicId}`;
    const response= await axios.get(queryUrl);
    return response;  
}

