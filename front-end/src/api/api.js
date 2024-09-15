import axios from 'axios';

// API taban URL'sini ayarlayın
const API_BASE_URL = 'http://127.0.0.1:8000'; 

// Axios örneği oluşturun
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API'den hava durumu verilerini alma
export const getMarsWeather = async () => {
  try {
    const response = await apiClient.get('/weather/insight-weather/');
    return response.data;
  } catch (error) {
    console.error('API çağrısında hata:', error);
    throw error;  // Hataları bileşene geri fırlatabilirsiniz
  }
};



// Diğer API isteklerini buraya ekleyin
