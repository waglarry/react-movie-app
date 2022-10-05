import React from 'react'
import { NavLink } from "react-router-dom";
import './Logo.css'

const Logo = () => {
  return (
    <div>
      <label htmlFor="logo" onClick={() => window.scroll(0,0)}>
        <NavLink to="/"  className='navLogo'>
          <span>🏚</span> Waga's<span>HuB</span>
        </NavLink>
      </label>
    </div>
  )
}

export default Logo