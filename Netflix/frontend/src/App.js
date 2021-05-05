import './App.css';
import Regisration from './Components/Registration';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './Components/Detail';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/Login' component={Login} />
          <Route path='/Signup' component={Regisration} />
          <ProtectedRoute path='/Home' component={Home}>
          </ProtectedRoute>
          <ProtectedRoute path='/Detail' component={Detail}>
          </ProtectedRoute>
          {/* <Route path='/Dashboard' component={Dashboard} /> */}
          <ProtectedRoute path='/Dashboard' component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
