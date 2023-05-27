import React from "react";
import './Hero.css';

import avatar from '../../images/avatar.jpg';

function Hero() {
  return (
      <div className='hero'>
        <div className='hero__container'>
            <img id='hero__container__avatar' src={avatar} alt='profile picture'/>
            <div className='hero__container__text'>
                <h1>Kirill <span className='pink'>(fahlerile)</span> Trofimov</h1>
                <h2>ML/DL enthusiast</h2>
            </div>
        </div>
        <span class="material-symbols-outlined">
          arrow_downward
        </span>
      </div>
  );
}
  
export default Hero;
  