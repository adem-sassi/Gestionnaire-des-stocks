import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ProtectedResource = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/protected-resource', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            } catch (err) {
                setError(err.response ? err.response.data.message : 'Something went wrong');
            }
        };

        fetchProtectedData();
    }, []);

    return (
        <div>
            {data ? <p>{data.message}</p> : <p>{error}</p>}
        </div>
    );
};

export default ProtectedResource;
