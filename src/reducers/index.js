import { connectRouter } from 'connected-react-router';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

/**
 * Root reducer, combining everything to form the store
 * @param {Object} history The shared history object for controlling router behavior
 */
const createRootReducer = (history) => combineReducers({
  firebase: firebaseReducer, // React-Redux-Firebase
  firestore: firestoreReducer, // React-Redux-Firebase
  router: connectRouter(history), // for the router
});

export default createRootReducer;
