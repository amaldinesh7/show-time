export const ratingFilterSelector = (movies, ratingFilter) => {
    if (ratingFilter === null || ratingFilter === undefined) {
        return Object.values(movies.dict)
    }
    else {
        const filteredIds = movies.ids.filter(id => movies.dict[id].rating === parseInt(ratingFilter));
        const filteredMovies = filteredIds.map(id => {
            return (
                movies.dict[id]
            );
        });
        return filteredMovies
    }
}

export const sortMovieSelector = (movies, sortOrder) => {
    if (sortOrder === null || sortOrder === undefined) {
        return movies
    }
    else if (sortOrder === 'ASC') {
        const sortedMovies = [...movies]
        sortedMovies.sort(function (a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        return sortedMovies
    }
    else {
        const sortedMovies = [...movies]
        sortedMovies.sort(function (a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        }).reverse();
        return sortedMovies
    }
}