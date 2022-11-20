import React from 'react'
import { Link } from 'react-router-dom'

export default function Report() {
  return (
    <>
      <p className="report">Well done!!</p>
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
        </div>

        <p className="report report-today">Today's performance</p>

        <div className="set">
          <p>
            1 set: <span className="reps">10 reps</span>
            <span className="kgs">100kgs</span>
          </p>
        </div>
        <div className="set">
          <p>
            2 set: <span className="reps">7 reps</span>
            <span className="kgs">120kgs</span>
          </p>
        </div>
        <div className="set">
          <p>
            3 set: <span className="reps">5 reps</span>
            <span className="kgs">140kgs</span>
          </p>
        </div>

        <p className="report report-lastTime">
          What your oldself did last time
        </p>
        <div className="set">
          <p>
            1 set: <span className="reps">10 reps</span>
            <span className="kgs">90kgs</span>
          </p>
        </div>
        <div className="set">
          <p>
            2 set: <span className="reps">7 reps</span>
            <span className="kgs">110kgs</span>
          </p>
        </div>
        <div className="set">
          <p>
            3 set: <span className="reps">5 reps</span>
            <span className="kgs">130kgs</span>
          </p>
        </div>
      </div>

      <Link to="/profile" className="btn btn-start btn-main ">
        Go back to your profile
      </Link>
    </>
  )
}
