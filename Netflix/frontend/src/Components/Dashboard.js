import React from 'react';
import './Registration.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from './Detail';

const Dashboard = (props) => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/Home'>
                        <Home />
                    </Route>
                    <Route path='/Detail' >
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Dashboard;
