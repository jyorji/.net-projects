import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <h3 className= "mt-5 d-flex justify-content-center">Department Details</h3>
      <Navigation/>
      <switch>
        <Route path='/' component = {Home} exact />
        <Route path='/department' component = {Department} />
        <Route path='/employee' component = {Employee} />
      </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
