// NavBar will be a navigation bar or menu to switch between routes.

// Functionality: Allow users to easily navigate between different sections of the app (Browse Books, Reading List, Reading Challenge, etc.).
    // Sub-components:
    // Links: Each route should have a dedicated link.
    // User Profile (Optional): Allow users to personalize their experience and settings.

    import '../styles.css'    
    import React from 'react';
    import { Link } from 'react-router-dom';
    
    const NavBar = () => {
        return (
        <nav className="navbar">
            <h1 className="nav-links">Readiculous</h1>
            <p></p>
            <ul className="nav-links">
                
            <li><Link to="/">Search</Link></li>
            <li><Link to="/library">My Bookshelf</Link></li>
            </ul>
        </nav>
        );
    };
    
    export default NavBar;
    
      
    