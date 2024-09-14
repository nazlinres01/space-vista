import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { getMarsWeather } from '../../api/api';  // API dosyasından fonksiyonu içe aktarın

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement);

const WeatherChart = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // API'den veri çekme
        const fetchData = async () => {
            try {
                const weatherData = await getMarsWeather();
                setData(weatherData);
            } catch (error) {
                console.error('Hava durumu verisi çekme hatası:', error);
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
                label: 'Atmosferik Sıcaklık (°C)',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: true
            }]
        };
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Mars Hava Durumu Verileri</h1>
            {data ? (
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <Line data={chartData()} options={{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Mars Atmosferik Sıcaklığı Sol Üzerinden',
                                font: {
                                    size: 18,
                                },
                                color: '#333',
                            },
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Mars Sol\'ları',
                                    color: '#333',
                                    font: {
                                        size: 14,
                                    },
                                },
                                grid: {
                                    color: '#ddd',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Sıcaklık (°C)',
                                    color: '#333',
                                    font: {
                                        size: 14,
                                    },
                                },
                                beginAtZero: true,
                                grid: {
                                    color: '#ddd',
                                },
                            },
                        },
                    }} />
                </div>
            ) : (
                <p className="text-gray-600">Veriler yükleniyor...</p>
            )}
        </div>
    );
};

export default WeatherChart;
