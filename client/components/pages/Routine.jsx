import React from 'react'
import { Link } from 'react-router-dom'
import Quote from '../items/Quote'

export default function Routine() {
  return (
    <>
      <Quote />
      <form className="form form-Routine">
        <label htmlFor="userRoutine" className="form__label">
          add your exercise
        </label>
        <input
          type="text"
          name="userRoutine"
          className="form__input"
          placeholder="ex) Deadlift, Squat ..."
          required
        />
        <button className="btn btn-add">Add</button>

        <Link to="/profile" className="btn btn-signup">
          Submit
        </Link>
      </form>
    </>
  )
}
