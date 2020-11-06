import {
    START_GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAILURE
} from '../types';

import {getCharacters} from '../../services/apiService';

export const startGetCharacters=()=>({
    type:START_GET_CHARACTERS
});

export const getCharactersSuccess=characters=>({
    type:GET_CHARACTERS_SUCCESS,
    payload:characters
});

export const getCharactersFailure=error=>({
    type:GET_CHARACTERS_FAILURE,
    payload:error
});

export function getCharactersAction(){
    return async (dispatch) =>{
        dispatch(startGetCharacters());
        try{
            const response= await getCharacters();
            dispatch(getCharactersSuccess(response.data.data.results));
        }
        catch(error){
            dispatch(getCharactersFailure(error));
        }
    }
};

