import './App.css';
import Regisration from './Components/Registration';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/Login' component={Login} />
          <Route path='/Signup' component={Regisration} />
          {/* <Route path='/Dashboard' component={Dashboard} /> */}
          <ProtectedRoute path='/Dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
