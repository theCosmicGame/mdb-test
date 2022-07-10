import React from 'react';
import { createRoot } from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from 'history';

import "../dist/css/mdb.min.css";
import App from './App';

// Mount function to start up the app
// NOTE: if you update mount parameters then change the code for running the app in isolation below this definition
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // if given a default history object, assign it to history; otherwise use MemoryHistory object
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],    // what initial path is for MemoryHistory
  });

  if (onNavigate) {
    history.listen(onNavigate); // event listener tied to the history object which listens to whenever navigation occur
  }

  const root = createRoot(el);

  root.render(<App history={history} />);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      // console.log(location);
      
      const { pathname } = history.location;
      
      // avoid getting into an infinite loop
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_mdbreact-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };