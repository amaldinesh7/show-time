import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import FilterOption from "../FilterOption";
import SortOption from "../SortOption";
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
                    {/* <li>
                        <NavLink className="logout" to="/" >Logout</NavLink>
                    </li> */}
                    <li>
                        <FilterOption />
                    </li>
                    <li>
                        <SortOption />
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default MainNavigation