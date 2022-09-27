import React from 'react';
import { NavLink } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const NavLinks = () => {
  return (
    <div>
        <div className="navLinks">
              <NavLink to="/movies" className='navLink'>
                Movies
              </NavLink>
              <NavLink to="/tvshows" className='navLink'>
                Tv Shows
              </NavLink>
              <button className='navBtn navCloseBtn'>
                <FaTimes />
              </button>
          </div>
    </div>
  )
}

export default NavLinks