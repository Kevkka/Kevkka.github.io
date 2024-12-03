import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../Config';


const NewsForm = ({ editNewsData }) => {
    const [newsData, setNewsData] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [published_date, setPublished_date] = useState('');
    const [author, setAuthor] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API_URL}/news`)
            .then(res => res.json())
            .then(data => {
                if (editNewsData) {
                    setNewsData(editNewsData);
                }
            });
    }
    , [editNewsData]);

    const titleHandler = event => setTitle(event.target.value);
    const contentHandler = event => setContent(event.target.value);
    const published_dateHandler = event => setPublished_date(event.target.value);
    const authorHandler = event => setAuthor(event.target.value);
    const linkHandler = event => setLink(event.target.value);

    const submitHandler = async event => {
        event.preventDefault();

        const newNews = {
            title,
            content,
            published_date,
            author,
            link
        };

        if (editNewsData) {
            const { _id } = editNewsData;
            newNews._id = _id;

            try {
                const response = await fetch(`${API_URL}/news/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newNews)
                });

                if (response.ok) {
                    navigate('/news');
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const response = await fetch(`${API_URL}/news`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newNews)
                });

                if (response.ok) {
                    navigate('/news');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }





    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' value={title} onChange={titleHandler} />
                </div>
                <div className='form-control'>
                    <label htmlFor='content'>Content</label>
                    <input type='text' id='content' value={content} onChange={contentHandler} />
                </div>
                <div className='form-control'>
                    <label htmlFor='published_date'>Published Date</label>
                    <input type='text' id='published_date' value={published_date} onChange={published_dateHandler} />
                </div>
                <div className='form-control'>
                    <label htmlFor='author'>Author</label>
                    <input type='text' id='author' value={author} onChange={authorHandler} />
                </div>
                <div className='form-control'>
                    <label htmlFor='link'>Link</label>
                    <input type='text' id='link' value={link} onChange={linkHandler} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}


export default NewsForm;