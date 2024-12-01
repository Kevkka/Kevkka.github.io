import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../Config';

const NewsItem = ({ title, description, author, date }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/news`)
            .then(res => res.json())
            .then(data => setNews(data));
    }
    , []);
    return (
        <div>
            <ul>
                {news.map(news => (
                    <li key={news.id}>
                        <h2>{news.title}</h2>
                        <p> {news.content}</p>
                        <p>Author: {news.author}</p>
                        <p>Date: {news.published_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsItem;