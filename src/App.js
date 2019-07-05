import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/DashBoard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Favicon from 'react-favicon';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Favicon url={require('./card.jpg')} />
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create-project' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
