import React from 'react';
import { NavLink } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import './NavLinks.css'

const NavLinks = (props) => {
    const NavLinkStyle = ({ isActive }) =>{
      return {
        color: isActive ? 'dodgerblue' : '#fff',
        paddingBottom: isActive ? '.15rem' : '0',
        borderBottom: isActive ? '.15rem solid dodgerblue' : 'none',
        transition: 'all .3s ease',
        margin: "0 1rem",
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
              <NavLink to="/people" className='navLink' style={NavLinkStyle} onClick={props.showNavbar}>
                People
              </NavLink>
              <button className='navBtn' onClick={props.showNavbar} style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
              }}>
                <FaTimes />
              </button>
          </div>
    </div>
  )
}

export default NavLinks