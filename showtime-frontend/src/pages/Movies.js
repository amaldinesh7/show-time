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
        const temp_moviesData = response.data
        
        //sorting the fetched movies based on title in ascending order
        temp_moviesData.sort(function(a, b){
            var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        })

        setMoviesData(temp_moviesData);
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