import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layouts/WorkSpace';

const WorkSpace = ({ match }) =>
  <Layout match={match}>
    <Switch>
      <Route exact path="/:hotelName" component={() => <div>Overview</div>} />
      <Route
        path="/:hotelName/dashboard"
        component={() => <div>Dashboard</div>}
      />
      <Route path="/:hotelName/pricing" component={() => <div>Pricing</div>} />
    </Switch>
  </Layout>;

export default WorkSpace;
