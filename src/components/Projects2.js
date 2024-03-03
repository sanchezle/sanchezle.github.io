import React from 'react';
import './Projects2.css';
import myProjects from './myProjects';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card" onClick={() => window.location.href = project.url}>
            <div className="project-card-image">
                <img src={project.image} alt = "project" id="pic"></img>
            </div>
            <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
};
const Projects2 = ({ projects }) => {
    return (
        <div className="projects">
            <div className="container">
                <h2>My Projects</h2>
                <div className="content">
                    {myProjects.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        </div>
    );
};

export default Projects2;
