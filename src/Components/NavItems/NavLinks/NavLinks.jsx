import React from 'react';
import { NavLink } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
// import './NavLinks.css'

const NavLinks = (props) => {
    const NavLinkStyle = ({ isActive }) =>{
      return {
        color: isActive ? 'dodgerblue' : '#fff'
      }
    }

  return (
    <div>
        <div className="navLinks">
              <NavLink to="/movies" className='navLink' style={NavLinkStyle} onClick={props.showNavbar}>
                Movies
              </NavLink>
              <NavLink to="/tvshows" className='navLink' style={NavLinkStyle} onClick={props.showNavbar}>
                Tv Shows
              </NavLink>
              <button className='navBtn navCloseBtn' onClick={props.showNavbar}>
                <FaTimes />
              </button>
          </div>
    </div>
  )
}

export default NavLinks