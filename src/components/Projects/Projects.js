import React from "react";
import Project from '../Project/Project.js';
import './Projects.css';

function Projects() {
  let data = {
    name: 'Project One',
    date: '05.2023',
    img: 'avatar.jpg'
  }

  return (
    <div className="projects">
      <div className="projects__main">
        <Project
          position={[1, 1, 2, 2]}
          data={data}
        />
        <Project
          position={[1, 2, 2, 3]}
          data={data}
        />
        <Project 
          position={[2, 1, 3, 2]}
          data={data}
        />
        <Project 
          position={[2, 2, 3, 3]}
          data={data}
        />
      </div>
    </div>
  );
}
  
export default Projects;
  