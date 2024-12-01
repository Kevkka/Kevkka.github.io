import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../Config';

const SeriesItem = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/series`)
            .then(res => res.json())
            .then(data => setSeries(data));
    }
    , []);

    return (
        <div>
            <ul>
                {series.map(series => (
                    <li key={series.id}>
                        <h2>{series.title}</h2>
                        <a href="/">
                            <img src={series.poster} alt={series.title} />
                        </a>
                        <p>Description: {series.description}</p>
                        <p>Seasons: {series.seasons}</p>
                        <p>Episodes: {series.episodes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeriesItem;