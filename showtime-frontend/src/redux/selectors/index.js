export const ratingFilterSelector = (movies, ratingFilter) => {
    if (ratingFilter === null || ratingFilter === undefined) {
        // console.log("HERE INSIDE IF");
        return movies
    }
    else {
        const filteredIds = movies.ids.filter(id => movies.dict[id].rating === parseInt(ratingFilter));
        const filteredDict = { ...movies.dict }
        for (var i in filteredDict) {
            if (!filteredIds.includes(parseInt(i))) {
                delete filteredDict[i]
            }
        }
        console.log("Filtered--->DICT", filteredDict);
        const filteredMovies = { ...movies, ids: filteredIds,dict:filteredDict }
        return filteredMovies
    }
}

export const sortMovieSelector = (movies, sortOrder) => {
    if (sortOrder === null || sortOrder === undefined) {
        return movies
    }
    else if (sortOrder === 'ASC') {
        const listOfMovieObjects = Object.values(movies.dict)
        listOfMovieObjects.sort(function(a,b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        const sortedIds = []
        listOfMovieObjects.map(movie => sortedIds.push(movie.id))
        const sortedMovies = { ...movies, ids: sortedIds }
        return sortedMovies
    }
    else if (sortOrder === 'DESC') {
        const listOfMovieObjects = Object.values(movies.dict)
        listOfMovieObjects.sort(function(a,b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        const sortedIds = []
        listOfMovieObjects.map(movie => sortedIds.push(movie.id));
        sortedIds.reverse();
        const sortedMovies = { ...movies, ids: sortedIds }
        return sortedMovies
    }
}