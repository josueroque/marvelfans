import axios from 'axios';
//const baseUrl ='https://gateway.marvel.com:443/v1/public/characters?apikey=1cb3a2470c17d59344f1fca46ab0e4c9';
const baseUrl ='https://gateway.marvel.com:443/v1/public/';
const hash='a7b99f5ed0aeb877b0ef442ec312f35d';
const ts='1';
const apiKey='1cb3a2470c17d59344f1fca46ab0e4c9';

export const getCharacters=async()=>{

    const queryUrl=`${baseUrl}characters?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=20`;
    const response= await axios.get(queryUrl); 
   // console.log(response);
    return response;

} 


