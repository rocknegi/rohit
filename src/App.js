import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App(props) {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/AboutMe" exact component={About} />
          <Route path="/ContactMe" exact component={About} />
          <Route path="/StuffIDo" exact component={About} />
        </Switch>
      </BrowserRouter>




    </Fragment>
  )
}

export default App;