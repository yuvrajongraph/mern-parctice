import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
       <nav id="navbar-root">
        <ul>
          <li className="item">
            <a href="/todo">Todo</a>
          </li>
          <li className="item">
            <a href="/food">Food</a>
          </li>
          <li className="item">
            <a href="/fitness">Fitness</a>
          </li>
          <li className="item">
            <a href="/">Login/Signup</a>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Navbar