import React from 'react'
import Quote from '../items/Quote'

export default function SignUp() {
  return (
    <>
      <Quote />
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
    </>
  )
}
