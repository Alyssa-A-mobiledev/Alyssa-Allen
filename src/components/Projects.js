import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import galleryImg from '../img/gallery.png';
import cmsImg from '../img/cms.png';
import todoImg from '../img/ToDo.png';
import drawing6 from '../img/drawings/drawing6.jpg';
import brandImg from '../img/drink/all.jpg';
import wireframe1 from '../img/AR/Wireframe.jpg';
import Mockup from '../img/Mood/Mockup1.jpg';

const projects = [
    {
        title: 'Photo Gallery',
        description: 'An interactive photo gallery.',
        image: galleryImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3716c/labs/lab11/gallery.html',
        category: 'Coding',
        internal: false,
    },
    {
        title: 'TO DO App',
        description: 'A personal To Do App using SQL',
        image: todoImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3134c/assignment03/todo.php',
        category: 'Coding',
        internal: false,
    },
    {
        title: 'CMS Project',
        description: 'A simple CMS backend for a fictional movie review site. Login Information: Administratior view: admin = login & password Reviewer: review = login & password.',
        image: cmsImg,
        link: 'https://students.gaim.ucf.edu/~al488279/dig3134c/assignment04/admin.php',
        category: 'Coding',
        internal: false,
    },
    {
        title: 'Drawing 1 Gallery',
        description: 'A curated showcase of selected works from my Fundamentals of Drawing 1 class.',
        image: drawing6,
        link: '/drawing-gallery',
        category: 'Other',
        internal: true,
    },
    {
        title: 'Drink Branding',
        description: 'Branding and packaging design for a refreshing drink line with three flavors.',
        image: brandImg,
        link: '/brand', // updated link to /brand
        category: 'Graphic Design',
        internal: true,
    },
    {
        title: 'AR UX/UI Project',
        description: 'An Augmented Reality concept project showcasing wireframes, prototypes, a demo, and a research paper',
        image: wireframe1,
        link: '/APV',
        category: 'UX/UI',
        internal: true,
    },
    {
        title: 'Mood Tracker',
        description: 'A thoughtfully designed UX/UI project that helps users easily track and reflect on their daily emotions through an intuitive, visually engaging interface. By promoting mindfulness and emotional awareness, this app supports users in understanding their mood patterns and fostering overall well-being',
        image: Mockup,
        link: '/Mood',
        category: 'UX/UI',
        internal: true,
    }
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

            <div className={`projects-grid ${filteredProjects.length === 1 ? 'single' : ''}`}>
                {filteredProjects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        {project.internal ? (
                            <Link to={project.link}>View Project</Link>
                        ) : (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
