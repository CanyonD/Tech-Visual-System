import React from 'react';

import Header from "./Header";

const DashboardLayout = ({ match, children: Content }) => (
  <div className="Dashboard">
    <Header match={match} />
    {/* <section className="container-fluid"> */}
      {Content}
    {/* </section> */}
  </div>
);

export default DashboardLayout;
