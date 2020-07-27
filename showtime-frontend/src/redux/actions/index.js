import MoviesApi from '../../api/MoviesApi';

const FETCH_MOVIES_INIT = 'FETCH_MOVIES_INIT'
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'

const DELETE_MOVIE_INIT = 'DELETE_MOVIE_INIT';
const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';

export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_MOVIES_INIT });
        try {
            const response = await MoviesApi.get('/allmovies');
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
        } catch (e) {
            dispatch({ type: FETCH_MOVIES_FAILURE });
        }
    }
};

export const deleteMovie = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_MOVIE_INIT });
        try {
            await MoviesApi.delete(`/deletemovie/${id}`);
            dispatch({ type: DELETE_MOVIE_SUCCESS, payload: { id } });

        } catch (e) {
            dispatch({ type: DELETE_MOVIE_FAILURE });
        }
    }
};