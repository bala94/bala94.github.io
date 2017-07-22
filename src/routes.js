import React from 'react';
import App from './App.jsx';
import Home from './Home.jsx'
import {Route,IndexRedirect} from 'react-router';



export default (
     <Route path="/" component={App}>
        <IndexRedirect to="/home" component={Home}/>
        <Route path="/home" component={Home}/>
     </Route>
     )