import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
import './NavLinks.css'

const NavLinks = () => {
    window.addEventListener('scroll',function(){
        const navbar = document.getElementById("header");
        navbar.classList.toggle("sticky", window.scrollY > 0);
    });

    const NavLinkStyle = ({ isActive }) =>{
      return {
        color: isActive ? 'dodgerblue' : '#fff'
      }
    }

    const navRef = useRef()

    const showNavbar = () => {
      navRef.current.classList.toggle("reponsiveNav")
    }

  return (
    <div>
        <div className="navLinks">
              <NavLink to="/movies" className='navLink' style={NavLinkStyle} onClick={showNavbar}>
                Movies
              </NavLink>
              <NavLink to="/tvshows" className='navLink' style={NavLinkStyle} onClick={showNavbar}>
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