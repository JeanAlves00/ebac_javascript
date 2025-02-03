import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Substitua pelo seu API Key
const BASE_URL = 'http://apiadvisor.climatempo.com.br/api/v1';

export const getCurrentWeather = async (cityId) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather/locale/${cityId}/current?token=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
        throw error;
    }
};

export const getWeatherForecast = async (cityId) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast/locale/${cityId}/days/15?token=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar previsão do tempo:', error);
        throw error;
    }
};