import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import FilterOption from "../FilterOption";
import SortOption from "../SortOption";
import './MainNavigation.css';
import Image from "../../../images/show-time-logo-large.png";

const MainNavigation = () => {
    return (
        <header className="main-header">

            <div className="showtime-logo">
                <Link to='/movies'> <img alt="showtime-logo" src={Image}></img></Link>
            </div>

            <nav className="nav-bar">
                <ul className="nav-links">
                    <li>
                        <FilterOption />
                    </li>
                    <li className="buttons-option">
                        <SortOption />
                    </li>
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