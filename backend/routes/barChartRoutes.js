// BarChart.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        axios.get('/api/bar-chart')
            .then(response => {
                const data = response.data;
                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Price Range',
                            data: data.values,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                    ],
                });
            })
            .catch(error => console.error('Error fetching chart data:', error));
    }, []);

    return (
        <div>
            <h2>Price Range Distribution</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default BarChart;
