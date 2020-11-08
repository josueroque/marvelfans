import {
    START_GET_STORIES,
    GET_STORIES_SUCCESS,
    GET_STORIES_FAILURE
} from '../types';

const initialState={stories:[],loading:false,error:false};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action) {
    switch(action.type){
        case START_GET_STORIES:
            return{
                ...state,
                loading:true,
                error:false,
                stories:[]
            }
        case GET_STORIES_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                stories:action.payload
            }  
        case GET_STORIES_FAILURE:
            return{
                ...state,
                loading:false,
                error:true,
                stories:[]
            }              
        default:
            return {...state};    

    }
}