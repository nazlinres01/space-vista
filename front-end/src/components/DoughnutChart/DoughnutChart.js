import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.js modüllerini kaydet
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ sol, data }) => {
    const processChartData = () => {
        if (!data || !data.validity_checks || !data.validity_checks[sol]) {
            return {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                }]
            };
        }

        const solData = data.validity_checks[sol];
        const categories = ['AT', 'HWS', 'PRE', 'WD'];
        const colors = {
            'AT': 'rgba(75, 192, 192, 0.7)',
            'HWS': 'rgba(255, 159, 64, 0.7)',
            'PRE': 'rgba(153, 102, 255, 0.7)',
            'WD': 'rgba(255, 99, 132, 0.7)',
        };

        // Her kategori için verileri işleyin
        const categoryCounts = categories.map(cat => {
            const hours = solData[cat]?.sol_hours_with_data || [];
            return hours.length;
        });

        return {
            labels: categories.map(cat => {
                return `${cat} (${categoryCounts[categories.indexOf(cat)]})`;
            }),
            datasets: [{
                data: categoryCounts,
                backgroundColor: categories.map(cat => colors[cat]),
                borderColor: categories.map(cat => colors[cat].replace('0.7', '1')),
                borderWidth: 1,
                hoverBackgroundColor: categories.map(cat => colors[cat].replace('0.7', '0.9')),
                hoverBorderColor: categories.map(cat => colors[cat].replace('0.7', '1')),
            }]
        };
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6" style={{ maxWidth: '500px', margin: '0 auto', marginBottom: '150px' }}>
            <h2 className="text-lg font-bold mb-4">Mars Verileri - Dairesel Grafik</h2>
            <Doughnut 
                data={processChartData()} 
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#333',
                                font: {
                                    size: 12,
                                },
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    return `${label}: ${value} saat`;
                                },
                                afterLabel: function(context) {
                                    const solData = data.validity_checks[sol];
                                    const category = context.label.split(' ')[0];
                                    const hoursDetails = solData[category]?.sol_hours_with_data || [];
                                    return `Detaylar: ${hoursDetails.join(', ')}`;
                                }
                            }
                        }
                    },
                    elements: {
                        arc: {
                            borderWidth: 1,
                        }
                    }
                }} 
            />
        </div>
    );
};

export default DoughnutChart;
