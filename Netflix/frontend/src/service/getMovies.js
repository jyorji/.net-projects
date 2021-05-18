export const getMovies = () => {
  return fetch(process.env.REACT_APP_MOVIE)
    .then((Response) => Response.json())
}