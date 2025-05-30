import React from 'react';
import galleryImg from '../img/gallery.png';
import cmsImg from '../img/cms.png';
import todoImg from '../img/ToDo.png';

const projects = [
    {
        title: 'Photo Gallery',
        description: 'An interactive photo gallery.',
        image: galleryImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3716c/labs/lab11/gallery.html',
    },
    {
        title: 'TO DO App',
        description: 'A personal To Do App',
        image: todoImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3134c/assignment03/todo.php',
    },
    {
        title: 'CMS Project',
        description: 'A simple CMS backend for a fictional movie review site. Login and Password for Review page is review, Login for administrator is admin.',
        image: cmsImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3134c/assignment04/admin.php',
    },
];

const Projects = () => {
    return (
        <section className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
