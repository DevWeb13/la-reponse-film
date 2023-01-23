import React from "react";

/**
 * It takes a date in the format of yyyy-mm-dd and returns it in the format of dd/mm/yyyy
 * @param {string} date - The date to be formatted.
 * @returns {string} A function that takes a date as a string and returns a new string with the date in the
 * format dd/mm/yy.
 */
export function dateFormater(date) {
  let [yy, mm, dd] = date.split("-");
  return [dd, mm, yy].join("/");
}

/**
 * It takes an array of genre ids and returns an array of genre names
 * @param {object} movie - the movie object
 * @returns {array} An array of li elements with the genre of the movie.
 */
export function genreFinder(movie) {
  let genreArray = [];
  for (let movieGenreIds of movie.genre_ids) {
    switch (movieGenreIds) {
      case 28:
        genreArray.push(`Action`);
        break;
      case 12:
        genreArray.push(`Aventure`);
        break;
      case 16:
        genreArray.push(`Animation`);
        break;
      case 35:
        genreArray.push(`Comédie`);
        break;
      case 80:
        genreArray.push(`Policier`);
        break;
      case 99:
        genreArray.push(`Documentaire`);
        break;
      case 18:
        genreArray.push(`Drame`);
        break;
      case 10751:
        genreArray.push(`Famille`);
        break;
      case 14:
        genreArray.push(`Fantasy`);
        break;
      case 36:
        genreArray.push(`Histoire`);
        break;
      case 27:
        genreArray.push(`Horreur`);
        break;
      case 10402:
        genreArray.push(`Musique`);
        break;
      case 9648:
        genreArray.push(`Mystère`);
        break;
      case 10749:
        genreArray.push(`Romance`);
        break;
      case 878:
        genreArray.push(`Science-fiction`);
        break;
      case 10770:
        genreArray.push(`Téléfilm`);
        break;
      case 53:
        genreArray.push(`Thriller`);
        break;
      case 10752:
        genreArray.push(`Guerre`);
        break;
      case 37:
        genreArray.push(`Western`);
        break;
      default:
        break;
    }
  }
  return genreArray.map((genre) => <li key={genre}>{genre}</li>);
}