import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';

const Header = ({loggedIn,setLoggedIn}) => {
    // const location = useLocation(); 
    // Get the current location

    const [showSearch,setShowSearch] = useState(false)

    // Function to determine if a link is active
    const isActiveRoute = (route) => {
        return true;
        // return location.pathname === route ? 'active' : '';
    };

    const handleLogout = async () => {
        setLoggedIn(false)
        await fetch('/admin/logout')
    }

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                NodeJs
            </Link>

            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/" className={isActiveRoute('/')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={isActiveRoute('/about')}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={isActiveRoute('/contact')}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className={isActiveRoute('/login')} onClick={handleLogout}>
                            Logout
                        </Link>
                    </li> */}
                </ul>
            </nav>

            <div className="header__button">
                <button className="searchBtn" aria-expanded="false" onClick={()=>setShowSearch(!showSearch)}>
                    Search
                    <Search showSearch={showSearch} setShowSearch={setShowSearch} />
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.875 14.875L11.7938 11.7938" stroke="black" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;

// Explanation:
// Imports:

// Import React and Link from react-router-dom. useLocation is used to get the current URL path.
// isActiveRoute Function:

// Determines if the current route matches the link’s route and returns a class name ('active').
// Rendering:

// Logo: Uses Link from react-router-dom for navigation.
// Navigation Links: Conditional class name is applied based on the current route.
// Search Button: Renders a button with an SVG icon.
// SVG:

// SVG attributes like stroke-width, stroke-linecap, and stroke-linejoin are converted to camelCase (e.g., strokeWidth).
// Styling:

// Ensure you have appropriate CSS for .header, .header__logo, .header__nav, .header__button, .searchBtn, and .active to style the component as desired.
// This React component handles navigation and highlights the active link based on the current route. Adjust the CSS classes and any additional logic according to your specific requirements.





/* <header class="header">
    <a href="/" class="header__logo">NodeJs</a>

    <nav class="header__nav">
        <ul>
            <li>
                <a href="/" class="<%= isActiveRoute('/', currentRoute) %>">Home</a>
            </li>
            <li>
                <a href="/about" class="<%= isActiveRoute('/about', currentRoute) %>">About</a>
            </li>
            <li>
                <a href="/contact" class="<%= isActiveRoute('/contact', currentRoute) %>">Contact</a>
            </li>
        </ul>

    </nav>

    <div class="header__button">
        <button class="searchBtn" aria-expanded="false">
            Search
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.875 14.875L11.7938 11.7938" stroke="black" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
    </div>

</header> */

