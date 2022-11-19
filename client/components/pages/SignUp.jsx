import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  // const setUsers = props.setUsers

  function handleSubmit() {
    console.log('submit!')
  }

  return (
    <>
      <form className="form form-signup" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="form__label">
          first name
        </label>
        <input type="text" name="firstName" className="form__input" required />
        <label htmlFor="lastName" className="form__label">
          last name
        </label>
        <input type="text" name="lastName" className="form__input" required />
        <label htmlFor="pronounce" className="form__label">
          pronounce
        </label>
        <div className="form-pronounce">
          <div className="pronounce-container">
            <label htmlFor="pronounce" className="form__label">
              he/him
            </label>
            <input
              type="radio"
              name="he"
              className="form__input"
              value="he/him"
            />
          </div>
          <div className="pronounce-container">
            <label htmlFor="pronounce" className="form__label">
              she/her
            </label>
            <input
              type="radio"
              name="she"
              className="form__input"
              value="she/her"
            />
          </div>
          <div className="pronounce-container">
            <label htmlFor="pronounce" className="form__label">
              they/them
            </label>
            <input
              type="radio"
              name="they"
              className="form__input"
              value="they/them"
            />
          </div>
        </div>
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
        <Link to="/goal" className="btn btn-next">
          next
        </Link>
      </form>
    </>
  )
}
