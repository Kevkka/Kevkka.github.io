import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../Config';
import styles from './SeriesItem.module.css';

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
                    <li className={styles.card} key={series.id}>
                        <h2>{series.title}</h2>
                        <a href={`/series/${series._id}`}>
                            <img className={styles.img}  src={series.poster} alt={series.title} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeriesItem;