import React, { useEffect, useState } from "react";

const Hearth = ({ movieId }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		if (window.localStorage.favorites) {
			if (window.localStorage.favorites.includes(movieId)) {
				setIsFavorite(true);
			}
		}
	}, [movieId]);

	return (
		<button
			type="button"
			onClick={(e) => {
				addFavorites(e, isFavorite, movieId, setIsFavorite);
			}}
			className="hearthWrapper"
		>
			<label className="like">
				<input type="checkbox" />
				{isFavorite ? (
					<div className="hearth isFavorite" />
				) : (
					<div className="hearth" />
				)}
			</label>
		</button>
	);
};

export default Hearth;
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
