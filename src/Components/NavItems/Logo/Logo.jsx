import React from 'react'
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <label htmlFor="logo" className='navLogo' onClick={() => window.scroll(0,0)}>
        <NavLink style={{
          color: "crimson",
          fontWeight: "700",
          fontSize: "1.1rem",
        }} to="/">
          <span>🏚</span> Waga's<span>HUB</span>
        </NavLink>
      </label>
    </div>
  )
}

export default Logo