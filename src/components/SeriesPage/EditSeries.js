import react, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Config';
import SeriesForm from './SeriesForm';

const EditSeries = () => {
    const { _id } = useParams();
    const [editseries, setEditSeries] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/series/${_id}`)
        .then(res => res.json())
        .then(data => setEditSeries(data));
    }, [_id]);


    return (
        <div>
            {editseries ? (
                <SeriesForm editSeriesData={editseries} />
            ) : (
                <p>No Editing.</p>
            )}
        </div>
    )
}

export default EditSeries;