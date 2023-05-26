import React from "react";
import './Hero.css';

import avatar from '../../images/avatar.jpg';

function Hero() {
  function handleClick() {
    setShow(prev => !prev);
  }

  const [show, setShow] = React.useState(false);

  return (
      <div className='hero'>
        <div className='hero__container'>
            <img id='hero__container__avatar' src={avatar} alt='profile picture'/>
            <div className='hero__container__text'>
                <h1>Kirill <span className='pink'>(fahlerile)</span> Trofimov</h1>
                <h2>ML/DL enthusiast</h2>
                <span className="material-symbols-outlined" onClick={handleClick}>
                  expand_more
                </span>
                <div className={`hero__container__text__conditional ${show ? null : 'hidden'}`}>
                  My name is Patrick Bateman. I'm 27 years old. I believe in taking care of myself, and a balanced diet and a rigorous exercise routine.
                </div>
            </div>
        </div>
      </div>
  );
}
  
export default Hero;
  