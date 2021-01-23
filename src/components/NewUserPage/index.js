import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { profileSelector } from "../../selectors";
import M from 'materialize-css';
document.addEventListener('DOMContentLoaded', function() {
  console.log("Hi")
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});


const NewUserPage = ({profile, test}) => {
  if (profile.isProfileComplete) {
    return <Redirect to="/App"/>;
  }
  return <div>
    <nav className="light-blue">
      <div className="nav-wrapper container">
        <a className="brand-logo" href="/">Logo</a>
      </div>
    </nav>
    <div className="container">
    </div>
    <ul className="collapsible">
    <li>
      <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
  </div>
}

const enhance = compose(
  connect(state => ({
    profile: profileSelector(state),
  })),
);

export default enhance(NewUserPage);