import React from "react";
import data from '../../projectsData.json';
import './Popup.css';

function Popup(props) {
  const id = props.id_;

  function closePopup() {
    props.setShow(false);
  }

  function changePopup(what) {
    if (what === 'next' && id !== data.length-1) {
      props.setId(prev => prev+1);
    } else if (what === 'prev' && id !== 0) {
      props.setId(prev => prev-1);
    }
  }

  return props.show ? (
    <div className="popup">
      <div className="popup__main">
        <p className="popup__backToHome" onClick={closePopup}>
          ⟵BACK TO HOME
        </p>
        <a className='popup__link' href={data[id].popup.githubLink} target='_blank' rel="noreferrer">
          <h1 className='popup__link__title'>{data[id].name}</h1>
        </a>

        {props.children}

        <div className="popup__imageWrapper">
          <img className="popup__imageWrapper__image" src={require(`../../../public/assets/${data[id].popup.img}`)} alt='project'/>
        </div>
      </div>

      <div className="popup__footer">
        <div className="popup__footer__prev" onClick={() => changePopup('prev')}>
          {id !== 0 ? `⟵${data[id-1].name}` : ""}
        </div>
        <div className="popup__footer__next" onClick={() => changePopup('next')}>
          {id !== data.length-1 ? `${data[id+1].name}⟶` : ""}
        </div>
      </div>

    </div>
  ) : "";
}
  
export default Popup;
  