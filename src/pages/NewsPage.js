import React from 'react';
import NewsItem from '../components/NewsPage/NewsItem';
import { useNavigate } from 'react-router-dom';

const NewsPage = () => {
    const navigate = useNavigate();

    const createHandler = () => {
        navigate('/news/add');
    }

    return (
        <>
        <nav>
            <a href="/moviesNews">Movies News</a>
            <a href="/seriesNews">Series News</a>
        </nav>
        <div>
            <h1>News Page</h1>
            <button onClick={createHandler}>Add News</button>
        </div>
        <div>
            <NewsItem />
        </div>
        </>
    );
};

export default NewsPage;