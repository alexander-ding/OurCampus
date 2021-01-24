import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import  Notifications from './dashboard/Notifications'
import ProjectList from './dashboard/ProjectList'

class Home extends Component {
    render() {
        return ( 
            <div className="App">
               <Navbar />
               <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList />
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notifications />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;