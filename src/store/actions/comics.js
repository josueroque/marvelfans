import {
    START_GET_COMICS,
    GET_COMICS_SUCCESS,
    GET_COMICS_FAILURE
} from '../types';

import {getComics} from '../../services/apiService';

export const startGetComics=()=>({
    type:START_GET_COMICS
});

export const getComicsSuccess=comics=>({
    type:GET_COMICS_SUCCESS,
    payload:comics
});

export const getComicsFailure=error=>({
    type:GET_COMICS_FAILURE,
    payload:error
});

export function getComicsAction(filter){
    return async (dispatch) =>{
        dispatch(startGetComics());
        try{
           // console.log(filter);
            const response= await getComics(filter);
           // console.log(response);
            dispatch(getComicsSuccess(response.data.data.results));
        }
        catch(error){
            //console.error(error);
            dispatch(getComicsFailure(error));
        }
    }
};

