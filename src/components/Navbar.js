import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt="Alyssa Allen Logo" className="h-10 w-auto" />
                </Link>
            </div>
            <ul className="nav-links flex space-x-6 text-gray-700 font-medium">
                <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
                <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
                <li><Link to="/projects" className="hover:text-purple-600">Projects</Link></li>
                <a
                    href="/Digital Media Resume - Alyssa Allen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600"
                >
                    Resume
                </a>
                <li><Link to="/contact" className="hover:text-purple-600">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
