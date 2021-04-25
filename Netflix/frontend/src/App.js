import './App.css';
import Regisration from './Components/Registration';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/Login' component={Login} />
          <Route path='/Signup' component={Regisration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
