import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import WeatherDetails from './components/WeatherDeatils';
import { getCurrentWeather, getWeatherForecast } from './services/weatherService';

const App = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const cityId = '76940-000'; // Substitua pelo ID da sua cidade
                const currentWeatherData = await getCurrentWeather(cityId);
                const forecastData = await getWeatherForecast(cityId);

                setCurrentWeather({
                    temperature: currentWeatherData.data.temperature,
                    location: currentWeatherData.name,
                    humidity: currentWeatherData.data.humidity,
                    windSpeed: currentWeatherData.data.wind_velocity,
                    precipitation: currentWeatherData.data.rain.precipitation,
                });

                setForecastData(forecastData.data.map(day => ({
                    date: day.date,
                    minTemp: day.temperature.min,
                    maxTemp: day.temperature.max,
                })));
            } catch (error) {
                console.error('Erro ao buscar dados do clima:', error);
            }
        };

        fetchWeatherData();
    }, []);

    if (!currentWeather) {
        return <div>Carregando...</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
                <CurrentWeather 
                  temperature={currentWeather.temperature}
                  location={currentWeather.location}
                  humidity={currentWeather.humidity}
                  windSpeed={currentWeather.windSpeed}
                />
                <WeatherDetails 
                  humidity={currentWeather.humidity}
                  windSpeed={currentWeather.windSpeed}
                  precipitation={currentWeather.precipitation}
                />
                <WeatherForecast forecast={forecastData} />
            </div>
        </ThemeProvider>
    );
};

export default App;