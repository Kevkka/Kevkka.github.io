import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Config';
import { useNavigate, useParams } from 'react-router-dom';

const SeriesForm = ({ editSeriesData}) => {
    const navigate = useNavigate();

    const [series, setSeries] = useState([]);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releasedate, setReleasedate] = useState('');
    const [description, setDescription] = useState('');
    const [seasons, setSeasons] = useState('');
    const [episodes, setEpisodes] = useState('');
    const { _id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}/series`)
            .then(res => res.json())
            .then(data => {
                setSeries(data);

                if (editSeriesData) {
                    setTitle(editSeriesData.title);
                    setGenre(editSeriesData.genre);
                    setReleasedate(editSeriesData.releasedate);
                    setDescription(editSeriesData.description);
                    setSeasons(editSeriesData.seasons);
                    setEpisodes(editSeriesData.episodes);
                }
            });
    }, [editSeriesData]);

    const titleHandler = event => setTitle(event.target.value);
    const genreHandler = event => setGenre(event.target.value);
    const releasedateHandler = event => setReleasedate(event.target.value);
    const descriptionHandler = event => setDescription(event.target.value);
    const seasonsHandler = event => setSeasons(event.target.value);
    const episodesHandler = event => setEpisodes(event.target.value);

    const submitHandler = async event => {
        event.preventDefault();

        const newSeries = {
            title,
            genre,
            releasedate,
            description,
            seasons,
            episodes
        };

        if (editSeriesData) {
            const { _id } = editSeriesData;
            newSeries._id = _id;

            try {
                const response = await fetch(`${API_URL}/series/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newSeries)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }
                const data = await response.json();
                navigate(`/series/${data._id}`);
            } catch (error) {
                console.error('There was a problem with the PUT request:', error);
            }
        } 
        else {
            try {
                const response = await fetch(`${API_URL}/series`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newSeries)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }
                const createdSeries = await response.json();
                navigate(`/series/${createdSeries._id}`);
            } catch (error) {
                console.error('There was a problem with the POST request:', error);
            }
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor='title'>Title:</label>
                <input type='text' name='title' id='title' value={title} onChange={titleHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='genre'>Genre:</label>
                <input type='text' name='genre' id='genre' value={genre} onChange={genreHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='releasedate'>Release Date:</label>
                <input type='date' name='releasedate' id='releasedate' value={releasedate} onChange={releasedateHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='description'>Description:</label>
                <textarea name='description' id='description' value={description} onChange={descriptionHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='seasons'>Seasons:</label>
                <input type='number' name='seasons' id='seasons' value={seasons} onChange={seasonsHandler} />
            </div>

            <div className='form-control'>
                <label htmlFor='episodes'>Episodes:</label>
                <input type='number' name='episodes' id='episodes' value={episodes} onChange={episodesHandler} />
            </div>
            <button type='submit'>{editSeriesData ? 'Edit Series' : 'Create New Series'}</button>
        </form>
    );
}

export default SeriesForm;