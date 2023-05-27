import React from "react";
import Project from '../Project/Project.js';
import Popup from '../Popup/Popup.js';
import data from '../../projectsData.json';
import './Projects.css';

function Projects() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [id, setId] = React.useState(0);

  function handleClick(id) {
    setShowPopup(true);
    setId(id);
  }

  return (
    <div className="projects">
      {!showPopup && <div className="projects__main">
        <Project
          position={[1, 1, 2, 2]}
          data={data[0]}
          onClick={() => handleClick(0)}
        />
        <Project
          position={[1, 2, 2, 3]}
          data={data[1]}
          onClick={() => handleClick(1)}
        />
        <Project 
          position={[2, 1, 3, 2]}
          data={data[2]}
          onClick={() => handleClick(2)}
        />
        <Project 
          position={[2, 2, 3, 3]}
          data={data[3]}
          onClick={() => handleClick(3)}
        />
      </div>}
      <Popup show={showPopup} setShow={setShowPopup}>
        <a class='popup__link' href={data[id].popup.githubLink} target='_blank' rel="noreferrer">
          <h1 className='popup__link__title'>{data[id].name}</h1>
        </a>
        <p className='popup__paragraph gray'>{data[id].popup.description}</p>
        <div className="popup__imageWrapper">
          <img className="popup__imageWrapper__image" src={require(`../../../public/images/${data[id].popup.img}`)} alt='project'/>
        </div>
      </Popup>
    </div>
  );
}
  
export default Projects;
  