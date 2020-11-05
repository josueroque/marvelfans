
import React,{Component} from 'react';
import Characters from './Characters';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
render(){
  return (
    <Router>
      <Switch>
        <Route exact path='characters' component={Characters} />
        <Route exact path='/' component={Characters} />
      </Switch>
    </Router>
  );
}
}

export default App;
