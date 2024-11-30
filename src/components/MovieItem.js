import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ title, releaseDate, genre, description, posterUrl }) => {
  return (
    <div className="movie-item">
      <img src={posterUrl} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-release-date">Release Date: {releaseDate}</p>
        <p className="movie-genre">Genre: {genre}</p>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};


MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
};

export default MovieItem;