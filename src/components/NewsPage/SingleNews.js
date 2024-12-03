import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../Config';
import DeleteNews from './DeleteNews';
import './SingleNews.scss';

const SingleNews = () => {
    const { _id } = useParams();
    const [news, setNews] = useState(null);
    const navigate = useNavigate();



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


    return (
        <div className='card'>
            <h2 className='title'>{news.title}</h2>
            <p>{news.content}</p>
            <p>Author: {news.author}</p>
            <p>Date: {news.published_date}</p>
            <a href={news.link}>Link</a>
            <br />
            <button onClick={editNews}>Edit</button>
            <br />
            <DeleteNews _id={_id} />
        </div>
    );
};

export default SingleNews;