import React from "react";
import Project from '../Project/Project.js';
import data from '../../projectsData.json';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <div className="projects__main">
        <Project
          position={[1, 1, 2, 2]}
          data={data[0]}
        />
        <Project
          position={[1, 2, 2, 3]}
          data={data[1]}
        />
        <Project 
          position={[2, 1, 3, 2]}
          data={data[2]}
        />
        <Project 
          position={[2, 2, 3, 3]}
          data={data[3]}
        />
      </div>
    </div>
  );
}
  
export default Projects;
  