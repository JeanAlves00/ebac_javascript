import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import WeatherDetails from './components/WeatherDeatils';

const App = () => {
    const currentWeather = {
        temperature: 22,
        location: "Rolim de Moura",
        humidity: 60,
        windSpeed: 15,
        precipitation: 10,
    };

    const forecastData = [
        { date: "2021-09-06", minTemp: 19, maxTemp: 23 },
        { date: "2021-09-07", minTemp: 20, maxTemp: 24 },
        { date: "2021-09-08", minTemp: 21, maxTemp: 25 },
        { date: "2021-09-09", minTemp: 22, maxTemp: 26 },
        { date: "2021-09-07", minTemp: 20, maxTemp: 24 },
        { date: "2021-09-08", minTemp: 21, maxTemp: 25 },
        { date: "2021-09-09", minTemp: 22, maxTemp: 26 },
    ];

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