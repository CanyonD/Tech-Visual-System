import React from 'react';
import NavBar from './NavBar';

const Header = ({ match, location }) =>
  <header className="WorkSpace__header">
    <NavBar match={match} />
  </header>;

export default Header;
