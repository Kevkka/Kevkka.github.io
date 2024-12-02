import react, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Config';
import MovieForm from './MovieForm';


const EditMovie = () => {
    const { _id } = useParams();
    const [editmovie, setEditMovie] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/movies/${_id}`)
        .then(res => res.json())
        .then(data => setEditMovie(data));
    }, [_id]);


    return (
        <div>
            {editmovie ? (
                <MovieForm editMovieData={editmovie} />
            ) : (
                <p>No Editing.</p>
            )}
        </div>
    )
}

export default EditMovie;