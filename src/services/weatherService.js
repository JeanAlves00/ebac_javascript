import axios from 'axios';

const API_KEY = '263a9defd00da7011c1e4794356453f1'; // Substitua pelo seu API Key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCityId = async (cityName) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}`);
        return response.data.id; // Retorna o ID da cidade encontrada
    } catch (error) {
        console.error('Erro ao buscar ID da cidade:', error);
        throw error;
    }
};

export const getCurrentWeather = async (cityId) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather?id=${cityId}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
        throw error;
    }
};

export const getWeatherForecast = async (cityId) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast?id=${cityId}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar previsão do tempo:', error);
        throw error;
    }
};