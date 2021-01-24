import React from "react";
import Col from "react-materialize/lib/Col";
import Row from "react-materialize/lib/Row";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { login } from "../../actions/authActions";
import { authSelector } from "../../selectors";
import fun from "../../assets/fun.jpeg";

const LandingPage = ({auth, login}) => {
  if (!isEmpty(auth)) {
    return <Redirect to="/App"/>;
  }
  return <div className="container">
    <br/><br/>
    <Row>
      <Col s={6}>
        <h2 className="header" style={{fontSize: 48, fontWeight: 700}}>Your new best friend is just around the corner.</h2>
        <p style={{fontSize: 30}}>
          Do the things you love with new people. Take others up on their offers for fun activities or create an open invitation for everyone to join you in your favorite things to do. 
        </p>
        <br/>
        <button className="btn btn-large waves-effect waves-light blue" onClick={login}>Sign In</button>
      </Col>
      <Col s={6}>
        <br/><br/>
        <img src={fun} style={{width: "100%"}} alt="splash"/>
      </Col>
    </Row>
    
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