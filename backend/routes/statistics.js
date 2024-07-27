// Statistics.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Statistics = () => {
    const [stats, setStats] = useState({ totalSales: 0, totalItemsSold: 0, totalItemsUnsold: 0 });

    useEffect(() => {
        axios.get('/api/statistics')
            .then(response => setStats(response.data))
            .catch(error => console.error('Error fetching statistics:', error));
    }, []);

    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Sales: {stats.totalSales}</p>
            <p>Total Items Sold: {stats.totalItemsSold}</p>
            <p>Total Items Unsold: {stats.totalItemsUnsold}</p>
        </div>
    );
};

export default Statistics;
