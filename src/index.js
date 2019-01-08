import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose'

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 150, beforeChildren: true },
    exit: { opacity: 0 }
});

const App = () => (
    <Route render={({ location }) => (
        <PoseGroup>
            <RouteContainer key={location.pathname}>
                <Switch location={location}>
                    <Route path="/" exact component={Home} key="home" />
                    <Route path="/Home" exact component={Home} key="home2" />
                    <Route path="/AboutMe" exact component={About} key="about" />
                    <Route path="/ContactMe" exact component={Contact} key="contact" />
                    <Route path="/StuffIDo" exact component={About} key="stuff" />
                </Switch>
            </RouteContainer>
        </PoseGroup>
    )} />
);

ReactDOM.render(<BrowserRouter basename="/rohit">
    <App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
