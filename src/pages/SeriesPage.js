import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../Config';
import SeriesItem from '../components/SeriesPage/SeriesItem';
import FooterSection from '../components/FooterSection';

const SeriesPage = () => {
    const [series, setSeries] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const createHandler = () => {
        navigate('/series/add');
    }

    useEffect(() => {
        fetch(`${API_URL}/series`)
        .then(res => res.json())
        .then(data => setSeries(data));
    }
    , []);

    return (
        <div>
            <h1>Series Page</h1>
            <button onClick={createHandler}>Add Series</button>
            <SeriesItem />
            <FooterSection />
        </div>
    );
};

export default SeriesPage;