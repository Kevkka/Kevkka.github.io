import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Config';
import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = ({ editMovieData }) => {
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releasedate, setReleasedate] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [runtime, setRuntime] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}/movies`)
            .then(res => res.json())
            .then(data => {
                setMovies(data);

                if (editMovieData) {
                    setTitle(editMovieData.title);
                    setGenre(editMovieData.genre);
                    setReleasedate(editMovieData.releasedate);
                    setDescription(editMovieData.description);
                    setRating(editMovieData.rating);
                    setRuntime(editMovieData.runtime);
                }
            });
    }, [editMovieData]);

    const titleHandler = event => setTitle(event.target.value);
    const genreHandler = event => setGenre(event.target.value);
    const releasedateHandler = event => setReleasedate(event.target.value);
    const descriptionHandler = event => setDescription(event.target.value);
    const ratingHandler = event => setRating(event.target.value);
    const runtimeHandler = event => setRuntime(event.target.value);

    const submitHandler = async event => {
        event.preventDefault();

        const newMovie = {
            title,
            genre,
            releasedate,
            description,
            rating,
            runtime
        };
        
        
        if (editMovieData) {
            const { id } = editMovieData;
            newMovie.id = id;
            
            try {
                const response = await fetch(`${API_URL}/movies/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newMovie)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }
                const data = await response.json();
                navigate(`/movies/${data.id}`);
            } catch (error) {
                console.error('There was a problem with the PUT request:', error);
            }
        } else {
            try {
                const response = await fetch(`${API_URL}/movies`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newMovie)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }
                const createdMovie = await response.json();
                navigate(`/movies/${createdMovie.id}`);
            } catch (error) {
                console.error('There was a problem with the POST request:', error);
            }
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor='title'>Title:</label>
                <input type='text' name='title' id='title' value={title} onChange={titleHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='genre'>Genre:</label>
                <input type='text' name='genre' id='genre' value={genre} onChange={genreHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='releasedate'>Release Date:</label>
                <input type='date' name='releasedate' id='releasedate' value={releasedate} onChange={releasedateHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='description'>Description:</label>
                <textarea name='description' id='description' value={description} onChange={descriptionHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='rating'>Rating:</label>
                <input type='number' name='rating' id='rating' value={rating} onChange={ratingHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='runtime'>Runtime:</label>
                <input type='number' name='runtime' id='runtime' value={runtime} onChange={runtimeHandler} />
            </div>
            <button type='submit'>{editMovieData ? 'Edit Movie' : 'Create New Movie'}</button>
        </form>
    );
}

export default MovieForm;