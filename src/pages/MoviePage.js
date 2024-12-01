import React, { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../Config';
import { useParams } from 'react-router-dom';
import MovieListHeading from '../components/MoviePage/MovielistHeading';
import MovieItem from '../components/MoviePage/MovieItem';

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const id = useParams();

    useEffect(() => {
        fetch(`${API_URL}/movies`)
        .then(res => res.json())
        .then(data => setMovies(data));
    }
    , []);
    


  return (
    <div>
        <MovieListHeading heading='Movies'/>
        <MovieItem />
    </div>

)

};

export default MoviePage;