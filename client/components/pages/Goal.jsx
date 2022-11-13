import React from 'react'
import { Link } from 'react-router-dom'
import Quote from '../items/Quote'

export default function Goal() {
  return (
    <>
      <Quote />
      <form className="form form-goal">
        <label htmlFor="userGoal" className="form__label">
          tell me your goal
        </label>
        <input
          type="textarea"
          maxLength={30}
          name="userGoal"
          className="form__input"
          required
        />

        <Link to="routine" className="btn btn-next">
          next
        </Link>
      </form>
    </>
  )
}
