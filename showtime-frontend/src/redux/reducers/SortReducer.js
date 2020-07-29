const ADD_SORT_ORDER = 'ADD_SORT_ORDER';

const initialMoviesState = {
    sortOrder: null
};

export default (state = initialMoviesState, action) => {
    switch (action.type) {

        case ADD_SORT_ORDER:
            return {
                ...state,
                sortOrder: action.payload.sortOrder
            };
        default:
            return state;
    }
};