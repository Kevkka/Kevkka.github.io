import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../Config';
import SeriesItem from '../components/SeriesPage/SeriesItem';
import FooterSection from '../components/FooterSection';
import styles from './SeriesPage.module.css';

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
        <div className={styles.bg}>
            <h1 className={styles.page}>Series Page</h1>
            <button onClick={createHandler}>Add Series</button>
            <SeriesItem />
            <FooterSection />
        </div>
    );
};

export default SeriesPage;