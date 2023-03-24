import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css'
import Logo from '../NavItems/Logo/Logo';
import { FaBars } from 'react-icons/fa';
import NavLinks from '../NavItems/NavLinks/NavLinks';
import Themes from '../Themes/Themes';
import { FaArrowAltCircleUp } from 'react-icons/fa'


const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('relative');
  const [activeScrollToTop, setActiveScrollToTop] = useState('inActive');
  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll(0,0)
  }

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass('headerNavbar') : setStickyClass('relative');
      windowHeight > 0 ? setActiveScrollToTop('activeScrollToTopBtn') : setActiveScrollToTop('inActive');
    }
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("reponsiveNav")
  }
  
  return (
    <>
      <header className={stickyClass}>
      <button className='navBtn' onClick={showNavbar}>
          <FaBars />
        </button>
          <Logo className="logo"/>
        <nav className='navBar' ref={navRef}>
          <NavLinks showNavbar={showNavbar} />
        </nav>
        <div className='switchBtn'>
          <Themes />
        </div>
      </header>
      <span className={activeScrollToTop} onClick={() => scrollToTop()}>
        <FaArrowAltCircleUp style={{ 
          position: "fixed",
          right: "1.5rem",
          bottom: "1.5rem",
          color: "crimson",
          fontSize: "2.5rem",
          zIndex: "9999",
         }} />
      </span> 
    </>
  )
}

export default Navbar