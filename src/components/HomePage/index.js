import React, { Component } from 'react';
import Navbar from '../utils/Navbar'
import Dashboard from './Dashboard'

class Home extends Component {
    render() {
        return ( 
            <div className="App">
               <Navbar />
               <Dashboard/>
            </div>
        )
    }
}

export default Home;