import React from 'react'
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import { userActions } from '../../Actions';

const NavLink = ({ exact, to, eventKey, children }) =>
  <LinkContainer exact={exact} to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>;

const MenuLink = ({ to, eventKey, children }) =>
  <LinkContainer to={to} eventKey={eventKey}>
    <MenuItem>{children}</MenuItem>
  </LinkContainer>;

class NavBar extends React.Component {
  componentDidMount(match) {
    this.props.dispatch(userActions.getAll());
  }

  render(match) {
    const { user } = this.props;

    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`${this.props.match.url}`}>Tech Visual System</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavLink 
              to={`${this.props.match.url}/image`} 
              eventKey={1}
            >
              Image
            </NavLink>
            <NavLink 
              to={`${this.props.match.url}/table`} 
              eventKey={2}
            >
              Table
            </NavLink>
          </Nav>
          <Nav pullRight>
            <NavLink exact to={this.props.match.url} eventKey={3}>
                Dashboard
            </NavLink>
            <NavDropdown eventKey={3} title={user.firstName} id="basic-nav-dropdown">
              {/* <MenuLink to="/profile" eventKey={3.1}>
                Profile
              </MenuLink> */}
              <MenuLink to="/help" eventKey={3.2}>
                Help
              </MenuLink>
              <MenuItem divider />
              <MenuLink to="/login" eventKey={3.3}>Log Out</MenuLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
const connectedNavBar = connect(mapStateToProps)(NavBar);
export default connectedNavBar;
