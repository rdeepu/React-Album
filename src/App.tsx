import React,{Component} from 'react';


import {
  BrowserRouter as Router, Route
  } from 'react-router-dom';

import {Home} from './pages/Cont';
import {Albums} from './pages/Cont';
import {About} from './pages/Cont';



export default class App extends Component {

  
  render() {     

  return (

  <Router>

  <div className = "App"> 

    <Route exact path = '/' component = {Home}/>

    <Route exact path = '/albums' component = {Albums}/>

    <Route exact path = '/about' component = {About}/>

  </div> 

  </Router>

  )
}
}


