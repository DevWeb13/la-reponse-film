import React, { useEffect, useState } from "react";
import addFavorites from "../../functions/addFavorites";

/**
 * @param {object} props
 * @param {number} props.movieId
 * @returns  {JSX.Element}
 */
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
