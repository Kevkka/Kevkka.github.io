import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../Config';
import SeriesItem from '../components/SeriesPage/SeriesItem';

const SeriesPage = () => {
    const [series, setSeries] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}/series`)
        .then(res => res.json())
        .then(data => setSeries(data));
    }
    , []);

    return (
        <div>
            <h1>Series Page</h1>
            <SeriesItem />
        </div>
    );
};

export default SeriesPage;