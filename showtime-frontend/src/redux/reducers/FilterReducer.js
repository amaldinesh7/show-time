const ADD_RATING_FILTER = 'ADD_RATING_FILTER';

const initialMoviesState = {
    ratingFilter: null
};

export default (state = initialMoviesState, action) => {
    switch (action.type) {

        case ADD_RATING_FILTER:
            return {
                ...state,
                ratingFilter: action.payload.ratingFilter
            };
        default:
            return state;
    }
};