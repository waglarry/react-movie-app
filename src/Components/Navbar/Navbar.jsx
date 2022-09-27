import React, { useRef } from 'react';
import Switch from "react-switch";
import './Navbar.css';
import Logo from '../NavItems/Logo/Logo';
import { FaBars } from 'react-icons/fa';
import NavLinks from '../NavItems/NavLinks/NavLinks';

const Navbar = () => {

  return (
    <>
      <header>
        <nav className='navBar'>
          <Logo />
          <NavLinks />
          <Switch />
        </nav>
        <button className='navBtn'>
            <FaBars />
        </button>
      </header>
    </>
  )
}

export default Navbar