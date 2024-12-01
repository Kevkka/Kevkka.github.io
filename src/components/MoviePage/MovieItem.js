import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../../Config';
import styles from './MovieItem.module.css';

function MovieItem({ title, releaseDate, genre, description, posterUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/movies`)
            .then(res => res.json())
            .then(data => setMovies(data));
    }
    , []);

  return (
<div className="movie-item">
        <ul>
            {movies.map(movie => (
            <li className={styles.card} key={movie.id}>
                <h2 className={styles.title}>{movie.title}</h2>
                <p>Description: {movie.description}</p>
                <p>Release date: {movie.release_date}</p>
                <p>Genre: {movie.genre}</p>
                <p>Rating: {movie.rating}</p>
                <a href="/movies/" className={styles.img}>
                <img className={styles.img} src={movie.poster} alt={movie.title} />
                </a>
                <p>Runtime: {movie.runtime} minutes</p>
                <a target='_' href="https://www.youtube.com/watch?v=PLl99DlL6b4">Trailer</a>
                </li>
        ))}
        </ul>
      </div>
    
  );
}


export default MovieItem;
