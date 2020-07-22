import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import './MainNavigation.css';
import Image from "../../../images/showtime-logo.jpg";

const MainNavigation = () => {
    return (
        <header className="main-header">

            <div className="showtime-logo">
                <Link to='/'> <img alt="showtime-logo" src={Image}></img></Link>
            </div>

            <nav className="nav-bar">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/addmovie" exact>Add Movie</NavLink>
                    </li>
                    <li>
                        <NavLink className="logout" to="/" >Logout</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default MainNavigation