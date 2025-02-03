import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import WeatherDetails from './components/WeatherDetails';
import { getCityId, getCurrentWeather, getWeatherForecast } from './services/weatherService';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    width: 200px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

const App = () => {
    const [cityName, setCityName] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchWeatherData = async (cityName) => {
        setLoading(true);
        try {
            const cityId = await getCityId(cityName);
            const currentWeatherData = await getCurrentWeather(cityId);
            const forecastData = await getWeatherForecast(cityId);

            setCurrentWeather({
                temperature: currentWeatherData.main.temp,
                location: currentWeatherData.name,
                humidity: currentWeatherData.main.humidity,
                windSpeed: currentWeatherData.wind.speed,
                precipitation: currentWeatherData.rain ? currentWeatherData.rain['1h'] : 0,
            });

            setForecastData(forecastData.list.map(item => ({
                date: item.dt_txt,
                minTemp: item.main.temp_min,
                maxTemp: item.main.temp_max,
            })));
        } catch (error) {
            console.error('Erro ao buscar dados do clima:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (cityName) {
            fetchWeatherData(cityName);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
                <SearchContainer>
                    <Input
                        type="text"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        placeholder="Digite o nome da cidade"
                    />
                    <Button onClick={handleSearch}>Buscar</Button>
                </SearchContainer>
                {loading && <div>Carregando...</div>}
                {currentWeather && (
                    <>
                        <CurrentWeather 
                            temperature={currentWeather.temperature}
                            location={currentWeather.location}
                            humidity={currentWeather.humidity}
                            windSpeed={currentWeather.windSpeed}
                        />
                        <WeatherDetails 
                            humidity={currentWeather.humidity}
                            windSpeed={currentWeather.windSpeed}
                        />
                        <WeatherForecast forecast={forecastData} />
                    </>
                )}
            </div>
        </ThemeProvider>
    );
};

export default App;