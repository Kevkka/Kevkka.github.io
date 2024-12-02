import React, { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../Config';
import { useParams, useNavigate } from 'react-router-dom';
import MovieListHeading from '../components/MoviePage/MovielistHeading';
import MovieItem from '../components/MoviePage/MovieItem';

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
    <div>
        <MovieListHeading heading='Movies'/>
        <button onClick={createHandler}>Add Movie</button>
        <MovieItem />
    </div>

)

};

export default MoviePage;