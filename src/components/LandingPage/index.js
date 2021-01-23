import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { withLastLocation } from "react-router-last-location";
import { compose } from "redux";
import { authSelector } from "../../selectors";
import { login } from "../../actions/authActions";

const LandingPage = ({auth, lastLocation, login}) => {
  console.log("Rendering landing")
  if (!isEmpty(auth)) {
    const redirectPath = lastLocation ? lastLocation : "/App";
    return <Redirect to={redirectPath}/>;
  }
  return <div>
    <nav className="light-blue">
      <div className="nav-wrapper container">
        <a className="brand-logo" href="/">Logo</a>
      </div>
    </nav>
    <div className="container">
      <br/><br/>
      <h1 className="header center orange-text">Main title</h1>
      <div className="row center">
        <h5 className="header center light">Subtitle</h5>
      </div>
      
      <div className="row center">
        <button className="btn btn-large waves-effect waves-light orange" onClick={login}>Sign In</button>
      </div>
    </div>
  </div>
}

const enhance = compose(
  withLastLocation,
  connect(state => ({
    auth: authSelector(state),
  }), dispatch => ({
    login: () => dispatch(login()),
  }))
);

export default enhance(LandingPage);