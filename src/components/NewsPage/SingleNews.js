import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../Config';
import DeleteNews from './DeleteNews';
import './SingleNews.scss';
import { NewsContext, NewsProvider } from './NewsContext';

const SingleNews = () => {
    const { _id } = useParams();
    const [news, setNews] = useState(null);
    const navigate = useNavigate();
    const ctx = useContext(NewsContext);
    const { deleteNews, updateNews } = ctx;


    useEffect(() => {
        fetch(`${API_URL}/news/${_id}`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
            });
    }
    , [_id]);

    const editNews = () => {
        navigate(`/news/${_id}/edit`);
    }

    if (!news) {
        return <h2>Loading...</h2>
    }


    const deleteHandler = () => deleteNews(_id);
    const updateHandler = () => updateNews(_id);


    return (
        <div className='card'>
            <h2 className='titles'>{news.title}</h2>
            <p>Content: {news.content}</p>
            <p>Author: {news.author}</p>
            <p>Date: {news.published_date}</p>
            <a className='link' href={news.link}>Source</a>
            <br />
            <button onClick={editNews}>Edit</button>
            <br />
            <DeleteNews _id={_id} />
        </div>
    );
};

export default SingleNews;