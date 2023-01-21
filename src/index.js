import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";

const FavoritesContext = createContext('favorites');

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContext.Provider value={{ favorites: [] }}>
      <App />
    </FavoritesContext.Provider>
  </React.StrictMode>, document.getElementById('root'));

