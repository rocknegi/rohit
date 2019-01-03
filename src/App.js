import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App(props) {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/AboutMe" exact component={About} />
          <Route path="/ContactMe" exact component={Contact} />
          <Route path="/StuffIDo" exact component={About} />
        </Switch>
      </BrowserRouter>




    </Fragment>
  )
}

export default App;