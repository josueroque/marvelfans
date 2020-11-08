import {
    START_GET_STORIES,
    GET_STORIES_SUCCESS,
    GET_STORIES_FAILURE
} from '../types';

import {getStories} from '../../services/apiService';

export const startGetStories=()=>({
    type:START_GET_STORIES
});

export const getStoriesSuccess=stories=>({
    type:GET_STORIES_SUCCESS,
    payload:stories
});

export const getStoriesFailure=error=>({
    type:GET_STORIES_FAILURE,
    payload:error
});

export function getStoriesAction(filter){
    return async (dispatch) =>{
        dispatch(startGetStories());
        try{
           // console.log(filter);
            const response= await getStories(filter);
           // console.log(response);
            dispatch(getStoriesSuccess(response.data.data.results));
        }
        catch(error){
            //console.error(error);
            dispatch(getStoriesFailure(error));
        }
    }
};

