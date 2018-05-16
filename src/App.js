import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/Routes/PrivateRoute'
import { Dashboard, Help, NotFound, LoginPage } from './containers';
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
