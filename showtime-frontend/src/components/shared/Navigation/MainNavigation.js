import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import MoviesApi from '../../../api/MoviesApi';
import FilterOption from "../FilterOption";
import SortOption from "../SortOption";
import './MainNavigation.css';

const MainNavigation = () => {

    const logoutCurrentUser = () => {
        MoviesApi.delete(`/logout`);
    }

    return (
        <header className="main-header">

            <div className="showtime-logo">
                <Link to='/movies'> <img alt="showtime-logo" src="https://drive.google.com/thumbnail?id=1hM4LIwi5b3dyXbim0R3jVtpArctoBDIW"></img></Link>
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
                        <NavLink className="logout" to="/"  onClick={logoutCurrentUser} >Logout</NavLink>
                    </li>

                </ul>
            </nav>

        </header>
    );
};

export default MainNavigation