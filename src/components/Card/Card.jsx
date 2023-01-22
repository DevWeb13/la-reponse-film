import React, { useState, useCallback } from "react";
import Hearth from "../Hearth/Hearth";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

/**
 * It returns a div with a poster, a title, a release date, a rating, a list of genres, a synopsis and
 * a button to add the movie to the favorites list
 * @param {object} props - The props of the component.
 * @param {object} props.movie - The movie object.
 * @returns A div with a class of card.
 */
const Card = ({ movie }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const dateFormater = (date) => {
		let [yy, mm, dd] = date.split("-");
		return [dd, mm, yy].join("/");
	};

	const genreFinder = () => {
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
	};

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	return (
		<div className="card">
			<ReactModal
				isOpen={modalIsOpen}
				contentLabel="Modal"
				onRequestClose={closeModal}
				style={{
					overlay: {
						backgroundColor: "#546ee44b",
						zIndex: "1000",
					},
					content: {
						backgroundColor: "#212040",
						color: "white",
						borderRadius: "10px",
						fontSize: "calc(1rem + 2vw)",
					},
				}}
			>
				<button
					type="button"
					className="closeModalButton"
					value=" retour"
					onClick={closeModal}
				/>
				<div className="modalContainer">
					<p>{movie.overview}</p>
				</div>
			</ReactModal>
			<img
				src={
					movie.poster_path
						? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
						: "./img/poster.jpg"
				}
				alt="affiche film"
			/>
			<h2>{movie.title}</h2>
			{movie.release_date ? (
				<h5>Sorti le : {dateFormater(movie.release_date)}</h5>
			) : (
				""
			)}
			<h4>
				{movie.vote_average}/10 <span>⭐</span>
			</h4>
			<ul>
				{movie.genre_ids
					? genreFinder()
					: movie.genres.map((genre) => <li key={genre.name}>{genre.name}</li>)}
			</ul>
			{movie.overview && (
				<button onClick={() => setIsOpen(true)}>
					<h3>Synopsis</h3>
					<p>{movie.overview}</p>
				</button>
			)}

			<Hearth movieId={movie.id} />
		</div>
	);
};

export default Card;
