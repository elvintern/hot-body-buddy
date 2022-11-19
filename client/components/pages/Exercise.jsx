import React from 'react'
import { Link } from 'react-router-dom'

export default function Exercise() {
  return (
    <>
      <div className="routine">
        <div className="exercise">
          <select className="exercise__input">
            <option selected value="deadlift">
              deadlift
            </option>
            <option value="deadlift">squat</option>
            <option value="deadlift">running</option>
            <option value="deadlift">bench press</option>
          </select>
          <input type="number" placeholder="sets" className="sets" />
        </div>

        <div className="set">
          <p>1 set:</p>{' '}
          <input className="reps" type="number" placeholder="reps" />
          <input className="kgs" type="number" placeholder="kgs" />
        </div>
        <div className="set">
          <p>2 set:</p>{' '}
          <input className="reps" type="number" placeholder="reps" />
          <input className="kgs" type="number" placeholder="kgs" />
        </div>
        <div className="set">
          <p>3 set:</p>{' '}
          <input className="reps" type="number" placeholder="reps" />
          <input className="kgs" type="number" placeholder="kgs" />
        </div>
      </div>

      <Link to="/exercise" className="btn btn-start ">
        Finish
      </Link>
    </>
  )
}
