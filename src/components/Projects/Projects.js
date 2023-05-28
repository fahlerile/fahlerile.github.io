import React from "react";
import Project from '../Project/Project.js';
import Popup from '../Popup/Popup.js';
import data from '../../projectsData.json';
import './Projects.css';

function Projects() {
  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState(0);

  function showPopup(id) {
    setShow(true);
    setId(id);
  }
  
  function changePopup(what) {
    if (what === 'next' && id !== data.length-1) {
      setId(prev => prev+1)
    } else if (what === 'prev' && id !== 0) {
      setId(prev => prev-1)
    }
  }

  return (
    <div className="projects">
      {!show && <div className="projects__main">
        <Project
          position={[1, 1, 2, 2]}
          data={data[0]}
          onClick={() => showPopup(0)}
        />
        <Project
          position={[1, 2, 2, 3]}
          data={data[1]}
          onClick={() => showPopup(1)}
        />
        <Project 
          position={[2, 1, 3, 2]}
          data={data[2]}
          onClick={() => showPopup(2)}
        />
        <Project 
          position={[2, 2, 3, 3]}
          data={data[3]}
          onClick={() => showPopup(3)}
        />
      </div>}
      
      <Popup show={show} setShow={setShow}>
        <a class='popup__link' href={data[id].popup.githubLink} target='_blank' rel="noreferrer">
          <h1 className='popup__link__title'>{data[id].name}</h1>
        </a>
        <p className='popup__paragraph gray'>{data[id].popup.description}</p>
        <div className="popup__imageWrapper">
          <img className="popup__imageWrapper__image" src={require(`../../../public/images/${data[id].popup.img}`)} alt='project'/>
        </div>
        <div className="popup__footer">
          <div className="popup__footer__prev" onClick={() => changePopup('prev')}>
            {id !== 0 ? `⟵${data[id-1].name}` : ""}
          </div>
          <div className="popup__footer__next" onClick={() => changePopup('next')}>
            {id !== data.length-1 ? `${data[id+1].name}⟶` : ""}
          </div>
        </div>
      </Popup>
    </div>
  );
}
  
export default Projects;
  