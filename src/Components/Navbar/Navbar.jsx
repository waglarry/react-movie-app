import React, { useRef } from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

  return (
    <>
        <header id='header'>
          <div className='navLogo' onClick={() => window.scroll(0,0)}><NavLink to="/"><h1><span>🏚</span> Waga's<span>HUB</span></h1></NavLink></div>
          <nav className='navBar' id='navBar'>
            <NavLink to="/movies" className='navLinks' id='movies'>
                Movies
              </NavLink>
              <NavLink to="/tvshows" className='navLinks'>
                Tv Shows
              </NavLink>
              <NavLink to="/people" className='navLinks'>
                People
              </NavLink>
              <button className='navBtn navCloseBtn'>
                <FaTimes />
              </button>
              
              <form className="search">
                <input type="text" className='navSearchInput' placeholder='Movies, Tv Shows, People...' />
                <button type='button' className='navSearchBtn'>
                  <FaSearch />
                </button>
              </form>
          </nav>
          <button className='navBtn'>
            <FaBars />
          </button>
        </header>
    </>
  )
}

export default Navbar