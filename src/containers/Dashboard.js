import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layouts/Dashboard';
import NotFound from './NotFound';

const Dashboard = ({ match }) =>
  <Layout match={match}>
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
  </Layout>;

export default Dashboard;
