import React from "react";
import TextTransition from 'react-text-transition';
import './Navbar.css';

// https://fontawesome.com - icons

function Navbar() {
  const [showCopied, setShowCopied] = React.useState(false);

  function handleClick() {
    navigator.clipboard.writeText('fahlerile#1063');
    setShowCopied(true);
  }

  React.useEffect(() => {
    if (showCopied) {
      setTimeout(() => setShowCopied(false), 2000);
    }
  }, [showCopied]);

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
            <i className="fa-brands fa-kaggle fa-lg"></i>kaggle
            </a>
          </li>
          <li className='navbar__linkList__item'>
            <a onClick={handleClick} class='navbar__linkList__item__discord'>
              <i className="fa-brands fa-discord fa-lg"></i>
              <TextTransition inline={true} direction="down" translateValue="50%" springConfig={{mass: 0.1, tension: 100, friction: 20}}>
                {showCopied ? "Copied!" : 'fahlerile#1063'}
              </TextTransition>
            </a>
          </li>
        </ul>
      </nav>
  );
}
  
export default Navbar;
  