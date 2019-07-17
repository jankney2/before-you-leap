import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./clientView/Splash";
import About from './clientView/About'
import Login from './adminView/Login' 


export default (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/about" component={About} />
    <Route  path='/admin' component={Login} />
    {/* 
    <Route  path='' component={}/>
  <Route  path='/' component={} />
  <Route  path='/' component={} />
  <Route  path='/' component={} />
 */}
  </Switch>
);
