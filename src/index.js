import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';


import {
  BrowserRouter as Router 
} from "react-router-dom";
import App from './App';
import {PrivilegeProvider} from './context'

ReactDOM.render(
  
    <PrivilegeProvider>
    <Router>
    <App />
    </Router>    
  
    </PrivilegeProvider>
  ,
  document.getElementById('root')
);


