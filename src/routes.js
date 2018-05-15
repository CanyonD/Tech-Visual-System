import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from './App';
import Home from './view/Home';
import NotFound from './view/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Root>
            <Sidebar>
                <SidebarItem key={'home'}>
                    <Link to={`home`}>
                        Home
                    </Link>
                    <Link to={`sdfsdfsdf`}>
                        wrong
                    </Link>
                </SidebarItem>
            </Sidebar>
            <Main>
                <Route exact={true} path="/" component={App} />
                <Route path="/home" component={Home} />
                <Route path="*" component={NotFound} />
            </Main>
        </Root>
    </Router>
);

const Root = (props) => (
    <div style={{
        display: 'flex'
    }} {...props}/>
)

const Sidebar = (props) => (
    <div style={{
        width: '10vw',
        height: '100vh',
        overflow: 'auto',
        background: 'lightgrey'
    }} {...props}/>
)

const SidebarItem = (props) => (
    <div style={{
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        padding: '5px 10px'
    }} {...props}/>
)

const Main = (props) => (
    <div style={{
        flex: 1,
        height: '100vh',
        overflow: 'auto'
    }}>
        <div style={{ padding: '20px'}} {...props} />
    </div>
)

export default Routes;