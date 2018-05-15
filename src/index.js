import React from 'react';
import ReactDOM from 'react-dom';
// import './view/css/index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';

const passport = require('passport');
const { Strategy } = require('passport-jwt');

const { jwt } = require('./config');

passport.use(new Strategy(jwt, function(jwt_payload, done) {
    if(jwt_payload !== void(0)) return done(false, jwt_payload);
    done();
}));

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);
registerServiceWorker();
