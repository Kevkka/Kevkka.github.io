import React from 'react';
import { API_URL } from '../../Config';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SingleMovie.module.css';

const SingleMovie = () => {
    const [movie, setMovie] = useState([]);
    const { _id } = useParams();


useEffect(() => {
    fetch(`${API_URL}/movies/${_id}`)
    .then(res => res.json())
    .then(data => setMovie(data));
}, [_id]);

if (!movie) {
    return <h2>Coming soon..</h2>;
}

return (
    <div className="movie-item">
        <div className={styles.card}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p>Description: {movie.description}</p>
            <p>Release date: {movie.release_date}</p>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <a target='_' href="https://www.youtube.com/watch?v=PLl99DlL6b4">Trailer</a>
        </div>
    </div>
);
}

export default SingleMovie;