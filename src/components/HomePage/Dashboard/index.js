import React from "react";
import EventList from "./EventList";

const Dashboard = () => {
  return <div className="dashboard">
    <div className="row">
      <div className="col s2">
        <p>Categories</p>
      </div>
      <div className="col s10">
        <EventList/>
      </div>
    </div>
  </div>
}

export default Dashboard;