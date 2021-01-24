import React from "react";
import Button from "react-materialize/lib/Button";
import EventList from "./EventList";
import MyEventList from "./MyEventList";

const Dashboard = () => {
  return <div className="dashboard container">
    <div className="center" style={{padding:"20px"}}>
      <Button large waves="green"><i className="material-icons">add</i></Button>
    </div>
    <div className="row">
        <div className="col s2">
            <p>Categories</p>
        </div>
        <div className="col s6">
            <EventList />
        </div>
        <div className="col s4">
            <MyEventList />
        </div>
    </div>
  </div>
}

export default Dashboard;