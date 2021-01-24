import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { profileSelector, usersSelector, eventsSelector } from '../../selectors';
import Navbar from '../utils/Navbar';
import SplashScreen from '../utils/SplashScreen';
import Dashboard from './Dashboard';

const HomePage = ({users, events, profile}) => {
  if (!isLoaded(users) || !isLoaded(events)) return <SplashScreen/>;

  return ( 
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

const enhance = compose(
  firestoreConnect([{
    collection: "events",
  }, {
    collection: "users",
  }]),
  connect(state => ({
    profile: profileSelector(state),
    users: usersSelector(state),
    events: eventsSelector(state),
  }))
)

export default enhance(HomePage);