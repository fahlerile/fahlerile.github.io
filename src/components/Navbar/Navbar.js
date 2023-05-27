import React from "react";
import './Navbar.css';

// https://fontawesome.com - icons

function Navbar() {
  return (
      <nav className='navbar'>
        <ul className='navbar__linkList'>
          <li className='navbar__linkList__item'>
            <a href='https://github.com/fahlerile' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github fa-lg"></i>github
            </a>
          </li>
          <li className='navbar__linkList__item'>
            <a href='https://twitter.com/fahlerile' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-twitter fa-lg"></i>twitter
            </a>
          </li>
          <li className='navbar__linkList__item'>
            <a href='https://www.kaggle.com/fahlerile' target='_blank' rel="noreferrer">
            <i class="fa-brands fa-kaggle fa-lg"></i>kaggle
            </a>
          </li>
          <li className='navbar__linkList__item'>
            <a>
              <i class="fa-brands fa-discord fa-lg"></i>@fahlerile
            </a>
          </li>
        </ul>
      </nav>
  );
}
  
export default Navbar;
  