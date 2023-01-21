import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<h1>La Réponse Film</h1>
			<nav>
				<ul>
					<NavLink
						to="/"
						// @ts-ignore
						className={navIsActive()}
					>
						<li>Accueil</li>
					</NavLink>
					<NavLink
						to="/coup-de-coeur"
						// @ts-ignore
						className={navIsActive()}
					>
						<li>Coup de coeur</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

function navIsActive() {
	return (nav) => (nav.isActive ? "nav-active" : null);
}
