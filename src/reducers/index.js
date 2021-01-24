import { connectRouter } from 'connected-react-router';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { CATEGORY_SELECTED, SEARCHED } from "../actions/categoriesAction";

const selectedCategoryReducer = (state=null, action) => {
  switch (action.type) {
    case CATEGORY_SELECTED:
      return action.data;
    default:
      return state;
  }
}

const searchReducer = (state="", action) => {
  switch (action.type) {
    case SEARCHED:
      return action.data;
    default:
      return state;
  }
}

/**
 * Root reducer, combining everything to form the store
 * @param {Object} history The shared history object for controlling router behavior
 */
const createRootReducer = (history) => combineReducers({
  firebase: firebaseReducer, // React-Redux-Firebase
  firestore: firestoreReducer, // React-Redux-Firebase
  router: connectRouter(history), // for the router
  selectedCategory: selectedCategoryReducer,
  search: searchReducer,
});

export default createRootReducer;
