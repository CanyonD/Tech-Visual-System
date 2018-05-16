import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../components/Layouts/Dashboard';
import NotFound from './NotFound';

class Dashboard extends React.Component {
  render() {
    return (
      <Layout match={this.props.match}>
        <Switch>
          <Route exact path="/system" component={() => <div>Overview</div>} />
          <Route
            path='/system/image'
            component={() => <div>Image</div>}
          />
          <Route 
            path="/system/table" 
            component={() => <div>Table</div>} 
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users
  };
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export default connectedDashboard;
