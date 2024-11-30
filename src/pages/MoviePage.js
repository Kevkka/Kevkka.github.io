import React, { useState, useEffect } from 'react';
import { API_URL } from '../Config';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
        .then(res => res.json())
        .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Description: {movie.description}</p>
            <p>Release date: {movie.release_date}</p>
            <p>Director: {movie.director}</p>
            <p>Cast: {movie.cast}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;