//rendering logic is inherently coupled with other UI logic: 
  // how events are handled
  // how the state changes over time
  // how the data is prepared for display.

// destructuring useState from React as it is a named export
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';


import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow', 'Playfair Display', 'Overpass']
  }
});

// deleted because we are now using lazy function and Suspense module
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Progress from './components/Navbar/Progress';
import Header from './components/Header';
import Home from './components/Home';

const history = createBrowserHistory();


export default () => {
  // useState is a HOOK to keep track of the application state IN A FUNCTION COMPONENT, in this case if the user isSignedIn
  // State generally refers to data or properties that need to be tracking in an application
  // hooks can only be called at the top level of a component; cannot be conditional; and can only be called inside React function commponents 
  // useState accepts an initial state and returns two values: the current state, and a function that updates the state 
  const [isSignedIn, setIsSignedIn] = useState(false);

  // 
  useEffect(() => {
    if (isSignedIn) {
      history.push('/companies/last')
    }
  }, [isSignedIn]);
  

  return (
    <Router location={history.location} navigator={history}>
    <div>
      <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
      <Suspense fallback={<Progress />} >
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </Suspense>
    </div>
    </Router>
  );
};
