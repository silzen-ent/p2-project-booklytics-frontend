// NavBar will be a navigation bar or menu to switch between routes.

// Functionality: Allow users to easily navigate between different sections of the app (Browse Books, Reading List, Reading Challenge, etc.).
    // Sub-components:
    // Links: Each route should have a dedicated link.
    // User Profile (Optional): Allow users to personalize their experience and settings.

import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    );
}
    
export default NavBar;