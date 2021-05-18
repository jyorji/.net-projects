export const getMovieById = (id) => {
    return fetch(process.env.REACT_APP_MOVIE + id)
        .then((Response) => Response.json())
}