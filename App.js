
//import './App.css';

import NavBar from './components/NavBarComp/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/NavBarComp/pages/Home';
import LogIn from './components/NavBarComp/pages/login';
import SignUp from './components/NavBarComp/pages/signup';
import LoggedIn from './components/NavBarComp/pages/loggedin'



function App () {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/login' component={LogIn} />
      <Route path='/loggedin' component={LoggedIn} />
      <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
    
     
      </>
  );
}

export default App;
