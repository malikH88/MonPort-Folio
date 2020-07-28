import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';

import NavBar from './Components/Navigation/NavBar';
import Home from './Components/HomePages/Home';
import SwipableProject from './Components/Projects/ProjectRoute/SwipableProject';
import MonCV from './Components/CurriculumPages/Curriculum';
import Contact from './Components/ContactPages/Contact';

import Login from './Components/LoginAdmin/login';
import NeedLog from './Components/LoginAdmin/NeedLog';
import Dashboard from'./Components/Dashboard/Dashboard';

import FormAdd from './Components/ProjectsMod/AddProject/FormAdd';
import Remove from './Components/ProjectsMod/RemoveProject/Remove';

import './App.css';

class App extends React.Component {
  withAuth = (Component) => {
    const { token } = this.props;
    const RedirectToError = () => (<Redirect to="/error" />);
    return (token != null ? Component : RedirectToError);
  };
  render() {
    const { withAuth } = this;
    return (
      <Router>
        <div className="App">
          <NavBar />
        </div>
        <Switch>
          <Route path="/admin" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/home" component={SwipableProject} />
          <Route path="/dashboard" component={withAuth(Dashboard)} />
          <Route path="/create" component={withAuth(FormAdd)} />
          <Route path="/remove" component={withAuth(Remove)} />
          <Route path="/error" component={NeedLog} />
          <Route path="/curriculumVitae" component={MonCV} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});
export default connect(mapStateToProps)(App);
