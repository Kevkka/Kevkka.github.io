import React, { useState } from 'react';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                Genre:
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </label>
            <br />
            <label>
                Year:
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
    
};

export default MovieForm;