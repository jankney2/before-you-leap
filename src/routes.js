import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./clientView/Splash";
import About from './clientView/About'


export default (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/about" component={About} />
    {/* 
  <Route  path='/dealWizard' component={CreateDeal} />
  <Route  path='' component={}/>
  <Route  path='/' component={} />
  <Route  path='/' component={} />
  <Route  path='/' component={} />
 */}
  </Switch>
);
