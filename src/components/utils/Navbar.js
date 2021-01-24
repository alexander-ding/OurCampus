import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { logout } from '../../actions/authActions'
import { profileSelector } from '../../selectors'
import logo from "../../assets/logo.png";

const Navbar = ({profile, logout}) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/App" className="blue-text">
          <img src={logo} alt="logo" style={{margin: "auto", height: 40, transform: "translateY(10px)"}}/>
        </Link>
        { !isEmpty(profile) ? 
          <ul className="right">
            <li>
              {// eslint-disable-next-line
              }<a href="#" className="blue-text" onClick={logout}>Logout</a></li>
          </ul> :
          null
        }
      </div>
    </nav>
  )
}

const enhance = compose(
  connect(state => ({
    profile: profileSelector(state),
  }), dispatch => ({
    logout: () => dispatch(logout())
  }))
)

export default enhance(Navbar);