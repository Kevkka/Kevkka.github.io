import react, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Config';


const DeleteSeries = () => {
    const { _id } = useParams();


    const handleDelete = () => {
        fetch(`${API_URL}/series/${_id}`, {
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

export default DeleteSeries;