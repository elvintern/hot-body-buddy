import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Exercise() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('change')
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <div className="motivation-bg" />
      ) : (
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

          <Link to="/report" className="btn btn-start ">
            Finish
          </Link>
        </>
      )}
    </>
  )
}
