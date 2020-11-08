import { combineReducers } from 'redux';
import charactersReducer from './characters';
import storiesReducer from './stories';
import comicsReducer from './comics';


export default combineReducers({
  characters: charactersReducer,
  stories:storiesReducer,
  comics:comicsReducer

});