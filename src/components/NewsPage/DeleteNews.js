import { API_URL } from '../../Config';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DeleteNews = () => {
    const { _id } = useParams();
    const navigate = useNavigate();


    const handleDelete = () => {
        fetch(`${API_URL}/news/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

        navigate('/news');
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteNews;