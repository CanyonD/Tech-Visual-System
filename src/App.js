import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './containers/Dashboard';
import Help from './containers/Help';
import NotFound from './containers/NotFound';
import PrivateRoute from './components/PrivateRoute'
import LoginPage from './containers/LoginPage';

import { history } from './components/Helpers';

const Profile = () =>
  <div>
    Profile
  </div>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={LoginPage} history={history}/>
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/help" component={Help} />
              <PrivateRoute path="/system" component={Dashboard} />
              <Route path="/login" component={LoginPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
