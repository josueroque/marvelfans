import { combineReducers } from 'redux';
import charactersReducers from './characters';


export default combineReducers({
  characters: charactersReducers

});