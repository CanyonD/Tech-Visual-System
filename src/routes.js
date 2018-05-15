import React from "react";
import { 
    BrowserRouter as Router,
    Route, 
    Link, 
    // NavLink,
    Switch
} from 'react-router-dom'
import { 
    Nav, 
    Navbar, 
    NavItem 
} from "react-bootstrap"

import App from './App';
import Home from './view/Home';
import NotFound from './view/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Navbar fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Tech Visual System</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem href="/home">Home</NavItem>
                    <NavItem href="/sdfsdfsdf">Wrong</NavItem>
                </Nav>
            </Navbar.Collapse>
            <Switch>
                <Route exact={true} path="/" component={App} />
                <Route path="/home" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Navbar>
    </Router>
);

export default Routes;