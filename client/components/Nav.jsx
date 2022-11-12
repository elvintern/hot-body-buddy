import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <Link to="/Home" className="nav__logo-link">
          <img
            src="/images/hbb-logo.png"
            alt="hbb logo"
            className="nav__logo-img"
          />
        </Link>
      </div>
    </>
  )
}

export default Nav
