import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { profileSelector } from '../../selectors';
import Navbar from '../utils/Navbar';
import Dashboard from './Dashboard';

const HomePage = ({profile}) => {
  if (!profile.isProfileComplete) {
    return <Redirect to="/NewUser"/>;
  }

  return ( 
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

const enhance = compose(
  connect(state => ({
    profile: profileSelector(state)
  }))
)

export default enhance(HomePage);