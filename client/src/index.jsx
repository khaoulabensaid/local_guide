import React, { Component} from "react";
import ReactDOM from "react-dom";

import Signup from './components/homepage/signup.jsx';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Login from './components/homepage/login.jsx';
import Home from './components/home.jsx';
import { BrowserRouter } from 'react-router-dom'


import NavBar from './components/navbar.jsx';
import Login from './components/homepage/login.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    return (<div>
      <Home />
    </div>)
  }


 

}
ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter> , document.getElementById("app"));
