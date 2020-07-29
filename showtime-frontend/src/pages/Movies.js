import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../redux/actions';
import {ratingFilterHandler} from '../redux/handlers';

const Movies = (props) => {

    // const [moviesData, setMoviesData] = useState([])

    // const getMovies = async moviesData => {
    //     const temp_moviesData = props.movies
    //     //sorting the fetched movies based on title in ascending order
    //     temp_moviesData.sort(function (a, b) {
    //         var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase()
    //         if (nameA < nameB) //sort string ascending
    //             return -1
    //         if (nameA > nameB)
    //             return 1
    //         return 0 //default return value (no sorting)
    //     })
    //     setMoviesData(temp_moviesData);
    // }


    useEffect(() => {
        props.fetchMovies();
    },[]);

    const useStyles = makeStyles((theme) => ({
        root: {
            paddingTop: 80,
            width: '75%',
            margin: '0 auto'
        }
    }));

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {props.movies.ids.map((movie, index) => (
                <MovieList key={movie} id={movie} number={index + 1} genre={props.movies.dict[movie].genre} title={props.movies.dict[movie].title} rating={props.movies.dict[movie].rating} />
            ))}
        </div>

    );
};


const mapStateToProps = (state) => {
    return { movies:ratingFilterHandler(state.movies,state.movies.ratingFilter)}
}


export default connect(mapStateToProps, { fetchMovies})(Movies);
