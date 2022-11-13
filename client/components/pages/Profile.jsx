import React from 'react'
import Quote from '../items/Quote'

export default function Profile() {
  return (
    <>
      <Quote />
      <div className="profile">
        <div className="welcome-msg">
          <p>welcome jinwoo park</p>
          <p className="report">
            you have been to the gym 7 times <br />
            since the date
          </p>
        </div>
        <p className="user-goal">your goal: hit 100kgs</p>
      </div>
      <button className="btn btn-start">start</button>
    </>
  )
}
