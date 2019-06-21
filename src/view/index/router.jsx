import React, { Component, Fragment } from 'react';
import All from './all/All.jsx'
import Good from './good/good.jsx'
import { Switch,Route, Redirect } from 'react-router-dom'
class IndexList extends Component {
  state = {}
  render () {
    return (
      <Fragment>
        <Route path="/index/all" component={All}></Route>
        <Route path="/index/good" component={Good}></Route>
      </Fragment>
    )
  }
  componentDidMount () {
  }
}

export default IndexList;