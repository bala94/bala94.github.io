import React from 'react';
import App from './App.jsx';
import Home from './components/Home.jsx'
import {Route,IndexRedirect} from 'react-router';
import UnderDevelopment from './components/UnderDevelopment.jsx';
import Dijkstra from './components/Dijkstra';



export default (
     <Route path="/" component={App}>
        <IndexRedirect to="/home" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path= "/dijkstra" component={Dijkstra}/>
        <Route path="*" component={UnderDevelopment}/>
     </Route>
     )