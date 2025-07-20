import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to= "/add">Add Goal</NavLink></li>
            <li><NavLink to="/deposit">Deposit</NavLink></li>
            <li><NavLink to="/overview">Overview</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar;