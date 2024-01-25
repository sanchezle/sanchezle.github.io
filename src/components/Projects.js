import React from 'react';
import './Projects.css';
import myProjects from './myProjects';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card" onClick={() => window.location.href = project.url} style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
};
const Projects = ({ projects }) => {
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

export default Projects;
