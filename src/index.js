import 'react-hot-loader';

import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import App from './components/App';
import { setupFB } from './firebase';
import history from './history';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';

/**
 * Wraps the component in a bunch of providers and renders
 * @param {Object} Component The component to render
 */
const render = (Component) => {
  // provides a bunch of objects:
  // router, redux store, firebase/firestore, and last location
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router history={history}>
            {/*setupFB(store) associates firebase with the redux store*/}
            <ReactReduxFirebaseProvider {...setupFB(store)}>
              <LastLocationProvider>
                <Component/>
              </LastLocationProvider>
            </ReactReduxFirebaseProvider>
          </Router>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// render the main app
render(App);

// enables hot module replacement in development
if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp)
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();