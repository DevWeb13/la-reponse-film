import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <NavLink to="/"
          // @ts-ignore
          className={(nav) => (nav.isActive ? "nav-active" : null)}>
          <li>Accueil</li>
          </NavLink>
          <NavLink to="/coup-de-coeur"
          // @ts-ignore
          className={(nav) => (nav.isActive ? "nav-active" : null)}>
          <li>Coup de coeur</li>
          </NavLink>
        </ul>
      </nav>
      <h1>La Réponse Film</h1>
    </header>
  );
};

export default Header;