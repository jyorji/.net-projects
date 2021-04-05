import logo from './logo.svg';
import './App.css';
import Regisration from './Components/Registration';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
              </li>    
               
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          {/* <Route exact path='/Login' component={Login} />     */}
          <Route path='/Signup' component={Regisration} />    
       
        </Switch>    
        <Switch>  
        {/* <Route path='/Dashboard' component={Dashboard} />     */}
        </Switch>  
      </div>    
    </Router>   
  );
}

export default App;
