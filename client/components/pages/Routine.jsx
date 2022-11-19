import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Routine() {
  const [routine, setRoutine] = useState([])
  const [exercise, setExercise] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const newRoutine = [...routine, exercise]
    setRoutine(newRoutine)
    setExercise('')
  }

  function handleChange(event) {
    setExercise(event.target.value)
  }

  return (
    <>
      <form className="form form-Routine" onSubmit={handleSubmit}>
        <label htmlFor="userRoutine" className="form__label">
          add your exercise
        </label>
        <input
          type="text"
          name="userRoutine"
          className="form__input"
          placeholder="ex) Deadlift, Squat ..."
          value={exercise}
          onChange={handleChange}
        />
        {routine.map((el) => {
          return <p key={Number(Date.now)}>{el}</p>
        })}

        <button className="btn btn-add">Add</button>

        <Link to="/profile" className="btn btn-signup">
          Submit
        </Link>
      </form>
    </>
  )
}
