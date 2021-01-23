import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { logout } from '../../actions/authActions'

const Navbar = ({logout}) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/App" className="brand-logo">OurCampus</Link>
        <ul className="right">
          <li>
            {// eslint-disable-next-line
            }<a href="#" onClick={logout}>Logout</a></li>
        </ul>
      </div>
    </nav>
  )
}

const enhance = compose(
  connect(null, dispatch => ({
    logout: () => dispatch(logout())
  }))
)

export default enhance(Navbar);