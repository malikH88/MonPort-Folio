import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';

import NavBar from './Components/Navigation/NavBar';
import Home from './Components/HomePages/Home';
import ProjectRoute from './Components/Projects/Router/NavProject';
import MonCV from './Components/CurriculumPages/Curriculum';
import Contact from './Components/ContactPages/Contact';
import Login from './Components/LoginAdmin/login';
import NeedLog from './Components/LoginAdmin/NeedLog';

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
          <Route path="/contact" component={withAuth(Contact)} />
          <Route path="/projets" component={ProjectRoute} />
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
