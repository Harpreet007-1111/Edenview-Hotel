import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

function Navbar() {

  const [showmenu, setShowMenu] = useState(false);

  return (
    <div className='nav-cont'>
      <div className="view">
      <img className='logo' src="/logo192x192.png" alt="Edenview Logo" />
      <p><a href="/">EDENVIEW HOTEL</a></p>
      </div>

      {(showmenu === true) ? <AiOutlineCloseCircle className="close" onClick={() => setShowMenu(false)} /> : <BiMenu className='menu' onClick={() => setShowMenu(!showmenu)} /> }

      {showmenu === true &&
        (
          <nav className={(showmenu === true)? 'fade-in' : 'fade-out'}>
          <HashLink smooth to="/#">Home</HashLink>
          <HashLink smooth to="/#about">About</HashLink>
          <HashLink smooth to="/#test">Testimonials</HashLink>
          <HashLink smooth to="/#menu">Menu</HashLink>
          <HashLink smooth to="/#gallery">Gallery</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
          </nav>
        )
      }

    </div>
  )
}

export default Navbar;