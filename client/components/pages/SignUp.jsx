import React from 'react'
import { Link } from 'react-router-dom'
import Quote from '../items/Quote'

export default function SignUp() {
  return (
    <>
      <Quote />
      <form className="form form-signup">
        <label htmlFor="firstName" className="form__label">
          first name
        </label>
        <input type="text" name="firstName" className="form__input" required />
        <label htmlFor="lastName" className="form__label">
          last name
        </label>
        <input type="text" name="lastName" className="form__input" required />
        <label htmlFor="userEmail" className="form__label">
          email
        </label>
        <input type="email" name="userEmail" className="form__input" required />
        <label htmlFor="password" className="form__label">
          password
        </label>
        <input
          type="password"
          name="password"
          className="form__input"
          required
        />
        <Link to="goal" className="btn btn-next">
          next
        </Link>
      </form>
    </>
  )
}
