import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MovieList from '../components/MovieList';
import MoviesApi from '../api/MoviesApi';

const Movies = () => {

    const [moviesData, setMoviesData] = useState([])

    const useStyles = makeStyles((theme) => ({
        root: {
            paddingTop: 80,
            width: '75%',
            margin: '0 auto'
        }
    }));

    const classes = useStyles();

    const getMovies = async moviesData => {
        const response = await MoviesApi.get('/allmovies');
        setMoviesData(response.data);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={classes.root}>
            {moviesData.map((movie,index) => (
                <MovieList key={movie.id} id={movie.id} number={index+1} genre={movie.genre} title={movie.title} rating={movie.rating} />
            ))}
        </div>

    );
};

export default Movies