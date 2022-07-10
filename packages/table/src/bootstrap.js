import React from 'react';
import ReactDOM from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// Mount function to start up the app
// NOTE: if you update mount parameters then change the code for running the app in isolation below this definition
const mount = (el, { onNavigate, defaultHistory }) => {
  // if given a default history object, assign it to history; otherwise use MemoryHistory object
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate); // event listener tied to the history object which listens to whenever navigation occur
  }

  const root = ReactDOM.createRoot(el);

  root.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  );

  return{
    onParentNavigate({ pathname: nextPathname }) {
      console.log('Container-marketing just navigated.');
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
  const devRoot = document.getElementById('#_table-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
