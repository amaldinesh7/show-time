export const ratingFilterHandler = (movies, ratingFilter) => {
    if (ratingFilter === null || ratingFilter === undefined) {
        console.log("HERE INSIDE IF");
        return movies
    }
    else {
        const filteredIds = movies.ids.filter(id => movies.dict[id].rating === parseInt(ratingFilter));
        const filteredMovies = {...movies,ids:filteredIds}
        console.log("INSIDE --> HANDLER",filteredMovies);
        return filteredMovies
    }
}