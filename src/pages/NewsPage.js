import React from 'react';
import NewsItem from '../components/NewsPage/NewsItem';
import { useNavigate } from 'react-router-dom';
import { NewsProvider } from '../components/NewsPage/NewsContext';
import FooterSection from '../components/FooterSection';

const NewsPage = () => {
    const navigate = useNavigate();

    const createHandler = () => {
        navigate('/news/add');
    }

    return (
        <>
        <NewsProvider>

        <div>
            <h1>News Page</h1>
            <button onClick={createHandler}>Add News</button>
        </div>
        <div>
            <NewsItem />
        </div>

        </NewsProvider>
        <FooterSection />
        </>
    );
};

export default NewsPage;