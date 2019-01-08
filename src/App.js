// import React, { Fragment } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import posed, { PoseGroup } from 'react-pose'

// import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';

// const RouteContainer = posed.div({
//   enter: { opacity: 1, delay: 300, beforeChildren: true },
//   exit: { opacity: 0 }
// });

// function App({ location }) {
//   return (

//     <BrowserRouter basename="/rohit">
//       <PoseGroup>
//         <RouteContainer key={location.key}>
//           <Switch location={location}>
//             <Route path="/" exact component={Home} />
//             <Route path="/Home" exact component={Home} />
//             <Route path="/AboutMe" exact component={About} />
//             <Route path="/ContactMe" exact component={Contact} />
//             <Route path="/StuffIDo" exact component={About} />
//           </Switch>
//         </RouteContainer>
//       </PoseGroup>
//     </BrowserRouter>
//   )
// }

// export default App;