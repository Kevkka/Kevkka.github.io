import react from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../Config';
import { useParams } from 'react-router-dom';

const DeleteNews = () => {
    const { _id } = useParams();


    const handleDelete = () => {
        fetch(`${API_URL}/news/${_id}`, {
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

export default DeleteNews;