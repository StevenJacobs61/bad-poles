import React, { useEffect, useState, useCallback } from 'react';
import '../css/navbar.css' ;
import {NavLink} from 'react-router-dom';
import {BiChevronDownCircle} from 'react-icons/bi';
import {FaHome} from 'react-icons/fa';



function Navbar () {
const [click, setClick] = useState(true);

const handleClick = () => setClick(!click);

const [navShow, setNavShow] = useState(true);

const [y, setY] = useState(document.scrollingElement.scrollHeight);

const handleNavigation = useCallback((e) => {

  if (y > window.scrollY) {
    setNavShow(true);
  } else if (y < window.scrollY) {
    setNavShow(false);
  }
  setY(window.scrollY)
}, [y]);

useEffect(() => {

  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);

  
 



return (
<>
  <header >
    <nav className={ navShow ? 'nav' : 'nav nav_hide'}>
      <NavLink className='link nav__logo nav__item' to='/'>XXX BadPoles</NavLink>
      <BiChevronDownCircle className={click ? 'collapsible-chevron' : 'collapsible-chevron chevron-expanded'} onClick={handleClick}/>
      <ul className={click ? 'collapsible-content list nav__items' : 'collapsible-content list nav__items collapsible-expanded'}>
        <li><NavLink className={'link nav__item'} to='/'><FaHome className='icon__home'/></NavLink></li>
       <li> <NavLink className={'link nav__item'} to='/about'>About</NavLink></li>
       <li> <NavLink className={'link nav__item'} to='/roadmap-page'>Roadmap</NavLink></li>
        <li><NavLink className={'link nav__item'} to='/art'>Art</NavLink></li>
       <li><NavLink className={'link nav__item'} to='/hall-of-fame'>Hall of Fame</NavLink></li>
        <li><NavLink className={'link nav__item'} to='/exclusive'>Exclusive Content</NavLink></li>
       <li> <NavLink className={'link nav__mint'} to='/mint'>MINT NFT</NavLink></li>
       </ul>
    </nav>
  </header> 
      
</>
)
}

export default Navbar;