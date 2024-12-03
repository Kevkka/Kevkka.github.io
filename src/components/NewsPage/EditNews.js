// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { API_URL } from '../../Config';
// import NewsForm from './NewsForm';

// import react, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { API_URL } from '../../Config';
// import NewsForm from './NewsForm';


// const EditNews = () => {
//     const { _id } = useParams();
//     const [EditNews, setEditNews] = useState(null);

//     const EditHandler = () => {
//         fetch(`${API_URL}/news/${_id}`, {
//             method: 'PATCH',
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         });
//     }


//     return (
//         <div>
//             {EditNews ? (
//                 <NewsForm EditNewsData={EditNews} />
//             ) : (
//                 <p>No Editing.</p>
//             )}
//             <button onClick={EditHandler}>Edit</button>
//         </div>
//     )
// }

// export default EditNews;


import react, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Config';
import NewsForm from './NewsForm';

const EditNews = () => {
    const { _id } = useParams();
    const [editNews, setEditNews] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/news/${_id}`)
            .then(res => res.json())
            .then(data => {
                setEditNews(data);
            });
    }, [_id]);

    const editHandler = () => {
        fetch(`${API_URL}/news/${_id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    return (
        <div>
            {editNews ? (
                <NewsForm editNewsData={editNews} />
            ) : (
                <p>No Editing.</p>
            )}
            <button onClick={editHandler}>Edit</button>
        </div>
    )
}

export default EditNews;