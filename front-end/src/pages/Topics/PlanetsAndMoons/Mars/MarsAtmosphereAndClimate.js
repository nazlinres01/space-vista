import React, { useState, useEffect } from 'react';
import Header from '../../../../components/Header/Header'; // Header componentini içe aktar
import Footer from '../../../../components/Footer/Footer';
import WeatherChart from '../../../../components/WeatherChart/WeatherChart';
import DoughnutChart from '../../../../components/DoughnutChart/DoughnutChart';
import { getMarsWeather } from '../../../../api/api'; // API'den veri çekmek için fonksiyon

const MarsAtmosphereAndClimate = () => {
  const [solOptions, setSolOptions] = useState([]);
  const [selectedSol, setSelectedSol] = useState(null);
  const [data, setData] = useState(null);
  const [chartType, setChartType] = useState('line'); // Grafik türünü kontrol et

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getMarsWeather();
        setData(weatherData);
        if (weatherData && weatherData.validity_checks && weatherData.validity_checks.sols_checked) {
          setSolOptions(weatherData.validity_checks.sols_checked);
          setSelectedSol(weatherData.validity_checks.sols_checked[0]);
        }
      } catch (error) {
        console.error('Hava durumu verisi çekme hatası:', error);
      }
    };

    fetchData();
  }, []);

  const handleSolChange = (event) => {
    setSelectedSol(event.target.value);
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        title="Mars Atmosferi ve İklimi"
        subtitle="Mars'ın atmosferi ve iklimini ayrıntılı veriler ve görselleştirmelerle keşfedin."
      />
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="solSelect" className="block text-lg font-semibold text-gray-800 mb-2">Sol Seçin:</label>
          <select
            id="solSelect"
            className="form-select block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
            value={selectedSol || ''}
            onChange={handleSolChange}
          >
            {solOptions.map(sol => (
              <option key={sol} value={sol}>{`Sol ${sol}`}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">Grafik Türü Seçin:</label>
          <div className="flex space-x-4">
            <button
              className={`py-2 px-6 rounded-lg font-bold text-white transition-all duration-300 ease-in-out transform ${chartType === 'line' ? 'bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg scale-105' : 'bg-gray-300 text-gray-700'} hover:scale-110 hover:shadow-xl focus:outline-none`}
              onClick={() => handleChartTypeChange('line')}
            >
              Çizgi Grafiği
            </button>
            <button
              className={`py-2 px-6 rounded-lg font-bold text-white transition-all duration-300 ease-in-out transform ${chartType === 'doughnut' ? 'bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg scale-105' : 'bg-gray-300 text-gray-700'} hover:scale-110 hover:shadow-xl focus:outline-none`}
              onClick={() => handleChartTypeChange('doughnut')}
            >
              Dairesel Grafik
            </button>
          </div>
        </div>

        {chartType === 'line' && selectedSol && data && (
          <WeatherChart sol={selectedSol} data={data} />
        )}
        {chartType === 'doughnut' && selectedSol && data && (
          <DoughnutChart sol={selectedSol} data={data} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MarsAtmosphereAndClimate;
