import React, { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../Config';
import { useParams, useNavigate } from 'react-router-dom';
import MovieListHeading from '../components/MoviePage/MovielistHeading';
import MovieItem from '../components/MoviePage/MovieItem';
import FooterSection from '../components/FooterSection';
import styles from './MoviePage.module.css';

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const id = useParams();
    const navigate = useNavigate();

    const createHandler = () => {
        navigate('/movies/add');
    }

    useEffect(() => {
        fetch(`${API_URL}/movies`)
        .then(res => res.json())
        .then(data => setMovies(data));
    }
    , []);
    
  return (
    <div className={styles.bg}>
        <MovieListHeading heading='Movies'/>
        <button onClick={createHandler}>Add Movie</button>
        <MovieItem />
        <FooterSection />
    </div>

)

};

export default MoviePage;