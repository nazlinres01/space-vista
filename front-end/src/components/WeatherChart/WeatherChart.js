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
                console.log("API'den alınan veri:", weatherData);
            } catch (error) {
                console.error('Hava durumu verisi çekme hatası:', error);
            }
        };

        fetchData();
    }, []);

    // Grafik için veri işleme
    const chartData = () => {
        if (!data || !data.validity_checks || !data.validity_checks.sols_checked) {
            return { labels: [], datasets: [] };
        }

        const sols = data.validity_checks.sols_checked;
        const labels = [];
        const atHours = [];
        const hwsHours = [];
        const preHours = [];
        const wdHours = [];

        sols.forEach(sol => {
            const solData = data.validity_checks[sol];
            if (solData) {
                const atData = solData.AT ? solData.AT.sol_hours_with_data : [];
                const hwsData = solData.HWS ? solData.HWS.sol_hours_with_data : [];
                const preData = solData.PRE ? solData.PRE.sol_hours_with_data : [];
                const wdData = solData.WD ? solData.WD.sol_hours_with_data : [];

                atData.forEach(hour => {
                    if (!labels.includes(`Sol ${sol} Saat ${hour}`)) {
                        labels.push(`Sol ${sol} Saat ${hour}`);
                    }
                });
                hwsData.forEach(hour => {
                    if (!labels.includes(`Sol ${sol} Saat ${hour}`)) {
                        labels.push(`Sol ${sol} Saat ${hour}`);
                    }
                });
                preData.forEach(hour => {
                    if (!labels.includes(`Sol ${sol} Saat ${hour}`)) {
                        labels.push(`Sol ${sol} Saat ${hour}`);
                    }
                });
                wdData.forEach(hour => {
                    if (!labels.includes(`Sol ${sol} Saat ${hour}`)) {
                        labels.push(`Sol ${sol} Saat ${hour}`);
                    }
                });
                atHours.push(...atData);
                hwsHours.push(...hwsData);
                preHours.push(...preData);
                wdHours.push(...wdData);
            }
        });

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Atmosferik Sıcaklık Saatleri',
                    data: atHours,
                    borderColor: 'rgba(75, 192, 192, 1)', // Mavi
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                },
                {
                    label: 'Hava Hızı Saatleri',
                    data: hwsHours,
                    borderColor: 'rgba(255, 159, 64, 1)', // Turuncu
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                },
                {
                    label: 'Basınç Saatleri',
                    data: preHours,
                    borderColor: 'rgba(153, 102, 255, 1)', // Mor
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                },
                {
                    label: 'Rüzgar Yönü Saatleri',
                    data: wdHours,
                    borderColor: 'rgba(255, 99, 132, 1)', // Kırmızı
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                }
            ]
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
                                text: 'Mars Sol Saatleri Üzerinden Hava Durumu Verileri',
                                font: {
                                    size: 18,
                                },
                                color: '#333',
                            },
                            legend: {
                                display: true,
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    label: (tooltipItem) => {
                                        const label = tooltipItem.dataset.label || '';
                                        const value = tooltipItem.raw || '';
                                        return `${label}: ${value}`;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Saatler',
                                    color: '#333',
                                    font: {
                                        size: 14,
                                    },
                                },
                                grid: {
                                    color: '#ddd',
                                },
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    maxRotation: 0,
                                    minRotation: 0,
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Saatler',
                                    color: '#333',
                                    font: {
                                        size: 14,
                                    },
                                },
                                beginAtZero: true,
                                grid: {
                                    color: '#ddd',
                                },
                                ticks: {
                                    stepSize: 1,
                                }
                            }
                        },
                    }} />
                </div>
            ) : null}
        </div>
    );
};

export default WeatherChart;
