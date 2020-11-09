
import React,{useEffect}  from 'react';
import{useDispatch} from 'react-redux';
import{getStoriesAction} from '../store/actions/stories';
import{getComicsAction} from '../store/actions/comics';
import{getCharactersAction} from '../store/actions/characters';
import Characters from './Characters';
import CharacterDetail from './CharacterDetail';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App () {
 
  const dispatch=useDispatch();
  const getStories=(filter)=>dispatch(getStoriesAction(filter));
  const getComics=(filter)=>dispatch(getComicsAction(filter));
  const getCharacters=(filter)=>dispatch(getCharactersAction(filter));
  useEffect(()=>{
    getComics({});
    getStories({});
    getCharacters({});
  },[])
  return (
    <Router>
      <Switch>
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/characters/:id' component={CharacterDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );

}

export default App;
