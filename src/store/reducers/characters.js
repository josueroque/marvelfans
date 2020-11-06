import {
    START_GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAILURE
} from '../types';

const initialState={characters:[],loading:false,error:false};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action) {
    switch(action.type){
        case START_GET_CHARACTERS:
            return{
                ...state,
                loading:true,
                error:false,
                characters:[]
            }
        case GET_CHARACTERS_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                characters:action.payload
            }  
        case GET_CHARACTERS_FAILURE:
            return{
                ...state,
                loading:false,
                error:true,
                characters:[]
            }              
        default:
            return {...state};    

    }
}