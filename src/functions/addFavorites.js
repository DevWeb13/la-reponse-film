/**
 * It adds or removes a movie from the localStorage
 * @param {React.MouseEvent<Element, MouseEvent>} e - the event object
 * @param {boolean} isFavorite - boolean
 * @param {number} movieId - the id of the movie that we want to add to our favorites
 * @param {function} setIsFavorite - a function that sets the isFavorite state
 * @returns {void}
 */
function addFavorites(e, isFavorite, movieId, setIsFavorite) {
  e.preventDefault();
  let moviesId = window.localStorage.favorites
    ? window.localStorage.favorites.split(",")
    : [];
  if (isFavorite) {
    moviesId.splice(moviesId.indexOf(movieId.toString()), 1);
  } else {
    moviesId.push(movieId);
  }
  window.localStorage.favorites = moviesId;
  setIsFavorite(!isFavorite);
}

export { addFavorites as default };