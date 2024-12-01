import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../../Config';
import styles from './MovieItem.module.css';
import { useParams } from 'react-router-dom';

function MovieItem({ title, releaseDate, genre, description, posterUrl }) {
    const [movies, setMovies] = useState([]);
    const _id = useParams();

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
                  <a href={`/movies/${movie._id}`} className={styles.img}>
                  <img className={styles.img} src={movie.poster} alt={movie.title} />
                  </a>
                  </li>
                  ))}
          </ul>
    </div>
    
  );
}


export default MovieItem;