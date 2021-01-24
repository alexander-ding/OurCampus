import React, { useState } from "react";
import Button from "react-materialize/lib/Button";
import PhoneInput from 'react-phone-number-input/input';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { completeProfile } from "../../actions/authActions";
import { profileSelector } from "../../selectors";

const NewUserPage = ({profile, register}) => {
  const [value, setValue] = useState();
  if (profile.isProfileComplete) {
    return <Redirect to="/App"/>;
  }
  return <div className="container center">
    <h1>Just a few more things</h1>
    <br/><br/>
    <PhoneInput
      international={false}
      country="US"
      value={value}
      onChange={setValue} 
      style={{
        textAlign: "center",
        fontSize: 30,
      }}
      placeholder="Enter your phone number"
    />
    <br/><br/><br/><br/>
    <Button large node="button" onClick={() => register(value)}>Done</Button>
  </div>;
}

const enhance = compose(
  connect(state => ({
    profile: profileSelector(state),
  }), dispatch => ({
    register: (number) => dispatch(completeProfile(number)),
  })),
);

export default enhance(NewUserPage);