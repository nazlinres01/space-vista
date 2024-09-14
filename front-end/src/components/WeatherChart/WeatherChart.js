import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { getMarsWeather } from '../api/api';  // API dosyasından fonksiyonu içe aktarın

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

const WeatherChart = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // API'den veri çekme
        const fetchData = async () => {
            try {
                const weatherData = await getMarsWeather();
                setData(weatherData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    // Grafik için veri işleme
    const chartData = () => {
        if (!data) return { labels: [], datasets: [] };

        const sols = Object.keys(data.sol_keys);
        const temperatures = sols.map(sol => data[sol].AT ? data[sol].AT.av : null);

        return {
            labels: sols,
            datasets: [{
                label: 'Atmospheric Temperature (°C)',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: true
            }]
        };
    };

    return (
        <div>
            <h1>Mars Weather Data</h1>
            {data ? (
                <Line data={chartData()} options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Mars Atmospheric Temperature Over Sols'
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Martian Sols'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Temperature (°C)'
                            },
                            beginAtZero: true
                        }
                    }
                }} />
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default WeatherChart;
