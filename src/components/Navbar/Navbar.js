import React from "react";
import './Navbar.css';

import githubIcon from '../../images/icons/Github.png';
import youtubeIcon from '../../images/icons/YouTube.png';

function Navbar() {
  return (
      <nav className='navbar'>
        <ul className='navbar__socialMediaList'>
          <li className='navbar__socialMediaList__item'>
            <a href='https://github.com/fahlerile' target="_blank" rel="noreferrer" className='navbar__socialMediaList__item__link'>
              <img src={githubIcon} alt='github' className='navbar__socialMediaList__item__link__icon'/>
            </a>
            <a href='https://www.youtube.com/@fahlerile' target="_blank" rel="noreferrer" className='navbar__socialMediaList__item__link'>
              <img src={youtubeIcon} alt='youtube' className='navbar__socialMediaList__item__link__icon'/>
            </a>
          </li>
        </ul>
        <ul className='navbar__linkList'>
          <li className='navbar__linkList__item'>about</li>
          <li className='navbar__linkList__item'>works</li>
          <li className='navbar__linkList__item'>contact</li>
        </ul>
      </nav>
  );
}
  
export default Navbar;
  