import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css'
import Logo from '../NavItems/Logo/Logo';
import { FaBars } from 'react-icons/fa';
import { RiSwitchFill } from 'react-icons/ri'
import NavLinks from '../NavItems/NavLinks/NavLinks';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass('headerNavbar') : setStickyClass('relative');
    }
  };

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("reponsiveNav")
  }
  
  return (
    <>
      <header className={stickyClass}>
        <Logo className="logo"/>
        <nav className='navBar' ref={navRef}>
          <NavLinks showNavbar={showNavbar} />
        </nav>
        <div className='switchBtn'>
          <RiSwitchFill />
        </div>
        <button className='navBtn' onClick={showNavbar}>
            <FaBars />
        </button>
      </header>
    </>
  )
}

export default Navbar