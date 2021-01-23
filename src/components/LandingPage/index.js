import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { login } from "../../actions/authActions";
import { authSelector } from "../../selectors";

const LandingPage = ({auth, login}) => {
  if (!isEmpty(auth)) {
    return <Redirect to="/App"/>;
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
  connect(state => ({
    auth: authSelector(state),
  }), dispatch => ({
    login: () => dispatch(login()),
  }))
);

export default enhance(LandingPage);