import React from "react";
import Categories from "./Categories";
import EventList from "./EventList";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  return <div className="dashboard">
    <div className="row">
      <div className="col s4">
        <SearchBar/>
        <Categories/>
      </div>
      <div className="col s8">
        <EventList/>
      </div>
    </div>
  </div>
}

export default Dashboard;