import React, { useRef } from 'react';
import './Navbar.css';
import Logo from '../NavItems/Logo/Logo';
import { FaBars } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import NavLinks from '../NavItems/NavLinks/NavLinks';

const Navbar = (props) => {
  // window.addEventListener('scroll',function(){
  //   const navbar = document.getElementById("header");
  //   navbar.classList.toggle("sticky", window.scrollY > 0);
  // });

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("reponsiveNav")
  }
  
  return (
    <>
      <header>
        <Logo className="logo"/>
        <nav className='navBar' ref={navRef}>
          <NavLinks showNavbar={showNavbar}/>
        </nav>
        <div className='searchBtn'>
          <FaSearch/>
        </div>
        <button className='navBtn' onClick={showNavbar}>
            <FaBars />
        </button>
      </header>
    </>
  )
}

export default Navbar