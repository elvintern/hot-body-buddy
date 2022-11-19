import React from 'react'
import Quote from '../items/Quote'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <>
      <Quote />
      <div className="profile">
        <p className="welcome-msg">welcome jinwoo park</p>
        <p className="report-date">since 15/11/2022</p>
        <p className="report-times">you have been to the gym 7 times</p>
        <p className="user-goal">your goal: hit 100kgs</p>
      </div>
      <Link className="btn btn-start" to="/exercise">
        start work out!
      </Link>
    </>
  )
}
