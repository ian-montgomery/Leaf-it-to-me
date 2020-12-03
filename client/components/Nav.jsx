import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOff } from 'authenticare/client'

const logOutUser = dispatch => {
  logOff()
}

const Nav = (props) => {
  return (
    <>
    <div className= 'nav-horizontal-div'>
      <button><NavLink to='/' exact activeClassName="active" className="nav-link"> Home</NavLink></button>
   
     
      <button><NavLink to='/plants/example' activeClassName="active" className="nav-link">Individual Plant</NavLink></button>

      <button><NavLink to='/plants/saved' activeClassName="active" className="nav-link">Saved Plants</NavLink></button>
      <button><NavLink to='/plants/new' activeClassName="active" className="nav-link">New Plant Form</NavLink></button>

      <button><NavLink to='/login' activeClassName="active" className="nav-link"> Login</NavLink></button>
      <button><NavLink to='/home' activeClassName="active" className="nav-link" onClick={() => logOutUser(props.dispatch)}> Logout</NavLink></button>
      <button><NavLink to='/register' activeClassName="active" className="nav-link"> Register</NavLink></button>
     
      </div>
    </>
  )
}

export default Nav
