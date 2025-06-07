import React, { useState } from 'react';
import galleryImg from '../img/gallery.png';
import cmsImg from '../img/cms.png';
import todoImg from '../img/ToDo.png';
import project3 from '../img/project3.jpg';


const projects = [
    {
        title: 'Photo Gallery',
        description: 'An interactive photo gallery.',
        image: galleryImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3716c/labs/lab11/gallery.html',
        category: 'Graphic Design',
    },
    {
        title: 'TO DO App',
        description: 'A personal To Do App',
        image: todoImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3134c/assignment03/todo.php',
        category: 'Coding',
    },
    {
        title: 'CMS Project',
        description: 'A simple CMS backend for a fictional movie review site. Login and Password for Review page is review, Login for administrator is admin.',
        image: cmsImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3134c/assignment04/admin.php',
        category: 'UX/UI',
    },
    {
        title: 'Spotify Album Covers',
        description: 'A dynamic visual showcase of Spotify playlist covers using animation and design.',
        image: project3,
        link: '/album-covers', // React route
        category: 'Graphic Design',
    },
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects =
        filter === 'All'
            ? projects
            : projects.filter((project) => project.category === filter);

    const filters = ['All', 'Graphic Design', 'Coding', 'UX/UI', 'Other'];

    return (
        <section className="projects-container">
            <div className="filter-buttons">
                {filters.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={filter === cat ? 'active' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            target={project.link.startsWith('/') ? '_self' : '_blank'}
                            rel="noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
