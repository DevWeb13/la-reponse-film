import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Form = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [search, setSearch] = useState("");
	const [sortGoodBad, setSortGoodBad] = useState("");

	useEffect(() => {
		if (search === "") return setMoviesData([]);
		axios
			.get(
				// @ts-ignore
				`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&language=fr-FR`
			)
			.then((res) => setMoviesData(res.data.results));
	}, [search]);

	return (
		<div className="form-component">
			<div className="form-container">
				<form>
					<input
						type="text"
						name="search-input"
						id="search-input"
						placeholder="Entrez le titre d'un film"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<input type="submit" value="Rechercher" />
				</form>
				<div className="btn-sort-container">
					<div
						className="btn-sort"
						id="goodToBad"
						onClick={() => setSortGoodBad("goodToBad")}
					>
						Top
						<span>→</span>
					</div>
					<div
						className="btn-sort"
						id="badToGood"
						onClick={() => setSortGoodBad("badToGood")}
					>
						Flop
						<span>→</span>
					</div>
				</div>
			</div>
			<div className="result">
				{moviesData
					.slice(0, 12)
					// @ts-ignore
					.sort((a, b) => {
						if (sortGoodBad === "goodToBad") {
							// @ts-ignore
							return b.vote_average - a.vote_average;
						} else if (sortGoodBad === "badToGood") {
							// @ts-ignore
							return a.vote_average - b.vote_average;
						}
						return null;
					})
					.map((movie) => (
						// @ts-ignore
						<Card key={movie.id} movie={movie} />
					))}
			</div>
		</div>
	);
};

export default Form;
