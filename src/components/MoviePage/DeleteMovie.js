import react, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Config';


const DeleteMovie = () => {
    const { _id } = useParams();


    const handleDelete = () => {
        fetch(`${API_URL}/movies/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }


    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteMovie;