import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { profileSelector } from "../../selectors";

const NewUserPage = ({profile, test}) => {
  if (profile.isProfileComplete) {
    return <Redirect to="/App"/>;
  }
  return <div className="container">
  </div>;
}

const enhance = compose(
  connect(state => ({
    profile: profileSelector(state),
  })),
);

export default enhance(NewUserPage);