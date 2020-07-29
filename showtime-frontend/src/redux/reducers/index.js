import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import FilterReducer from './FilterReducer';
import SortReducer from './SortReducer';

export default combineReducers({
    movies : MoviesReducer,
    filterMovies : FilterReducer,
    sortMovies : SortReducer
});