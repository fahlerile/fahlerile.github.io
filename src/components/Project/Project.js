import React from "react";
import './Project.css';

function Project(props) {
  const {name, date, img} = props.data;

  return (
    <div className="project" style={{gridArea: props.position.join(' / ')}}>
      <div className='project__imageBg' >
         <img src={require(`../../../public/images/${img}`)} alt='project'/>
      </div>
      <h2>{name}</h2>
      <h3>{date}</h3>
    </div>
  );
}
  
export default Project;
  