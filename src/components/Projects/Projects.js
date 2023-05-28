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
  
  React.useEffect(() => {
    window.scrollTo({
      top: -100,
      behavior: "smooth",
    });
  }, [show, id])

  return (
    <div className="projects">
      {!show && <div className="projects__main">
        <Project
          data={data[0]}
          onClick={() => showPopup(0)}
        />
        <Project
          data={data[1]}
          onClick={() => showPopup(1)}
        />
        <Project 
          data={data[2]}
          onClick={() => showPopup(2)}
        />
        <Project 
          data={data[3]}
          onClick={() => showPopup(3)}
        />
      </div>}

      <Popup show={show} setShow={setShow} id_={id} setId={setId}>
        <p className='popup__paragraph gray' dangerouslySetInnerHTML={{__html: data[id].popup.description}}></p>
      </Popup>
    </div>
  );
}
  
export default Projects;
  