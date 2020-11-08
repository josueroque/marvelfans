import {
    START_GET_COMICS,
    GET_COMICS_SUCCESS,
    GET_COMICS_FAILURE
} from '../types';

const initialState={comics:[],loading:false,error:false};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action) {
    switch(action.type){
        case START_GET_COMICS:
            return{
                ...state,
                loading:true,
                error:false,
                comics:[]
            }
        case GET_COMICS_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                comics:action.payload
            }  
        case GET_COMICS_FAILURE:
            return{
                ...state,
                loading:false,
                error:true,
                comics:[]
            }              
        default:
            return {...state};    

    }
}