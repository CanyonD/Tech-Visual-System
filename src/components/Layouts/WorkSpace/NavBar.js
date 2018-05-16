import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

const NavLink = ({ exact, to, eventKey, children }) =>
  <LinkContainer exact={exact} to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>;

const MenuLink = ({ to, eventKey, children }) =>
  <LinkContainer to={to} eventKey={eventKey}>
    <MenuItem>{children}</MenuItem>
  </LinkContainer>;

const NavBar = ({ match }) =>
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">MyHotel</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavLink to={`${match.url}/dashboard`} eventKey={1}>
          Dashboard
        </NavLink>
        <NavLink to={`${match.url}/pricing`} eventKey={2}>
          Pricing
        </NavLink>
      </Nav>
      <Nav pullRight>
        <NavLink exact to={match.url} eventKey={3}>

            My sample hotel

        </NavLink>
        <NavDropdown eventKey={3} title="John Smith" id="basic-nav-dropdown">
          <MenuLink to="/profile" eventKey={3.1}>
            Profile
          </MenuLink>
          <MenuLink to="/help" eventKey={3.2}>
            Help
          </MenuLink>
          <MenuItem divider />
          <MenuLink to="/account/logOut" eventKey={3.3}>Log Out</MenuLink>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default NavBar;
