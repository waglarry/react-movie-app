import React from 'react'
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div><label htmlFor="" className='navLogo' onClick={() => window.scroll(0,0)}><NavLink><span>🏚</span> Waga's<span>HUB</span></NavLink></label>
    </div>
  )
}

export default Logo