import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../Config';
import styles from './SingleSeries.module.css';
import DeleteSeries from './DeleteSeries';

const SingleSeries = () => {
    const [series, setSeries] = useState([]);
    const { _id } = useParams();
    const navigate = useNavigate();


useEffect(() => {
    fetch(`${API_URL}/series/${_id}`)
    .then(res => res.json())
    .then(data => setSeries(data));
}, [_id]);

const editHandler = () => {
    navigate(`/series/${_id}/edit`);
}

if (!series) {
    return <h2>Coming soon..</h2>;
}

    return (
        <div>
        <div className={styles.card}>
            <h2 className={styles.title}>{series.title}</h2>
            <p>Description: {series.description}</p>
            <p>Release date: {series.release_date}</p>
            <p>Genre: {series.genre}</p>
            <p>Seasons: {series.seasons}</p>
            <p>Episodes: {series.episodes}</p>
            <a target='_' href="https://www.youtube.com/watch?v=PLl99DlL6b4">Trailer</a>
        <button onClick={editHandler}>Edit</button>
        <DeleteSeries _id={_id} />
        </div>
    </div>
    );
};

export default SingleSeries;