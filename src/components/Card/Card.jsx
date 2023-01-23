import React, { useState, useCallback } from "react";
import Hearth from "../Hearth/Hearth";
import ReactModal from "react-modal";
import { dateFormater, genreFinder } from "../../functions/card";

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
					? genreFinder(movie)
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
