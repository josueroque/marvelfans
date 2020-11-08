
import React,{Component} from 'react';
import Characters from './Characters';
import CharacterDetail from './CharacterDetail';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import characters from '../store/reducers/characters';

class App extends Component {
render(){
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
}

export default App;
