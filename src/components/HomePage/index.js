import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { profileSelector } from '../../selectors';
import Navbar from '../utils/Navbar';
import Dashboard from './Dashboard';

const HomePage = ({profile}) => {


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