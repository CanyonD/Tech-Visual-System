import React from 'react';

import Header from "./Header";

const WorkSpaceLayout = ({ match, children: Content }) => (
  <div className="WorkSpace">
    <Header match={match} />
    <section className="container-fluid">
      {Content}
    </section>
  </div>
);

export default WorkSpaceLayout;
