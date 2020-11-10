import axios from 'axios';
const baseUrl =process.env.REACT_APP_baseUrl;
const hash=process.env.REACT_APP_hash;
const ts=process.env.REACT_APP_ts;
const apiKey=process.env.REACT_APP_apiKey;

export const getCharacters=async(filter)=>{
    
    let queryUrl=`${baseUrl}characters?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=50`;
    
    if (filter.name) queryUrl=`${queryUrl}&nameStartsWith=${filter.name}`;
      
    if (filter.comics) queryUrl=`${queryUrl}&comics=${filter.comics}`;
        
    if (filter.stories) queryUrl=`${queryUrl}&stories=${filter.stories}`;
 
    const response= await axios.get(queryUrl);

    return response;

} 

export const getComics=async()=>{
    let queryUrl=`${baseUrl}comics?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=50`;
    const response= await axios.get(queryUrl);
    return response;  
}

export const getComic=async(comic)=>{
    let queryUrl=`${baseUrl}comics?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=1&&titleStartsWith=${comic}`;
    const response= await axios.get(queryUrl);
    return response;  
}

export const getStories=async(filter)=>{
    let queryUrl=`${baseUrl}stories?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=50`;
   
    const response= await axios.get(queryUrl);

    return response;
}




