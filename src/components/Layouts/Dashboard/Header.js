import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

import { userActions } from '../../Actions';

class Header extends React.Component {
  componentDidMount(match) {
    this.props.dispatch(userActions.getAll());
  }

  render() {
    return (
      <header className="WorkSpace__header">
        <NavBar match={this.props.match} />
      </header>
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

const connectedHeader = connect(mapStateToProps)(Header);
export default connectedHeader;
