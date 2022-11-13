import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <form className="login-form">
        <label htmlFor="userName" className="login-form__label">
          user name
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          className="login-form__input"
        />

        <label htmlFor="password" className="login-form__label">
          password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="login-form__input"
        />
        <button className="btn btn-login">login</button>
      </form>
      <Link to="signup" className="btn btn-signup">
        sign up
      </Link>
    </>
  )
}
