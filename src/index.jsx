import React from 'react';
import { render } from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes.js';
import "./plugins/prism.css";




render(
     <Router history={browserHistory} routes={routes}/>,
      document.getElementById("app")
  );