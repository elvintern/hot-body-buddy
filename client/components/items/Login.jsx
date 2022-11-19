import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <form className="form form-login">
        <label htmlFor="userEmail" className="form__label">
          user email
        </label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          className="form__input"
          required
        />

        <label htmlFor="password" className="form__label">
          password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form__input"
          required
        />
        <button className="btn btn-login">login</button>
        <Link to="/signup" className="btn btn-signup">
          sign up
        </Link>
      </form>
    </>
  )
}
