import React from 'react'
import { Route } from 'react-router-dom'
import PlantList from './PlantList.jsx'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Home = () => {
  return (
    <>
      <div className="home">
        <img
          className="main-img"
          src="./images/potted-plant-transparent-background-5.png"
          alt="image of a tall, potted plant"
        />
        <div className="homeBanner">
            <h2>LEAF IT TO ME</h2>
            <h3>PLANT CARE MADE EASY</h3>
            <p>
              Helping house plant owners make their plants feel like bliss. Leaf
              it to us.
            </p>
          <IfNotAuthenticated>
            <NavLink
              to="/register"
              activeClassName="active"
              className="nav-link"
              id="btn-sign-up"
            >
              Sign Up
            </NavLink>
          </IfNotAuthenticated>
        </div>
      </div>
      <div>
        <Route path="/" component={PlantList} />
      </div>
    </>
  )
}

export default Home
