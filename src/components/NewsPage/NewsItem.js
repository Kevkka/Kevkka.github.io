import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../../Config';
import { useParams } from 'react-router-dom';
import './NewsItem.scss';


const NewsItem = ({}) => {
    const [news, setNews] = useState([]);
    const { _id } = useParams();




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
                    <li className="card" key={news.id}>
                        <h2 className="title">{news.title}</h2>
                        <p> {news.content}</p>
                        <p>Author: {news.author}</p>
                        <p>Date: {news.published_date}</p>
                        <a href={news.link}>Link</a>
                        <br />
                        <a href={`/news/${news._id}`}>Read More</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsItem;