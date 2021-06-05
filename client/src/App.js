import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Home from './Components/home';
import Profiles from './Components/Profiles';
import './App.scss';

const App = () => {
  return (
    <Router>  
      <Switch>
        <Route exact path="/">
          <Home/>  
        </Route>    
        <Route path="/profiles">
          <Profiles/>  
        </Route>          
      </Switch>
    </Router>
  );
}

export default App;
