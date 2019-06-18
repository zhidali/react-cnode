import React, { Component } from 'react';
// Redirect 重定向
import { Switch,Route, Redirect } from 'react-router-dom'

import Index from '../view/index/index'
import About from '../view/about/index'
import Book from '../view/book/index'
import Details from '../view/details/index'
import User from '../view/user/index'
class RouterIndex extends Component {
  render() { 
    return ( 
      <Switch>
        {/* {exact 严格匹配} */}
        <Route path="/" exact render={()=>(
          <Redirect to="/index"></Redirect>
        )}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/book" component={Book}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/user" component={User}></Route>
      </Switch>
     )
  }
}
 
export default RouterIndex;
