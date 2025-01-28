import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const Temp = styled.h1`
    font-size: 48px;
    margin: 0;
`;

const Location = styled.h2`
    font-size: 24px;
    margin: 10px 0;
`;

const Details = styled.div`
    margin-top: 10px;
    font-size: 18px;
`;

const CurrentWeather = ({ temperature, location, humidity, windSpeed }) => {
    return (
        <Container>
            <Location>{location}</Location>
            <Temp>{temperature}°C</Temp>
            <Details>
                <p>Humidity: {humidity}%</p>
                <p>Wind Speed: {windSpeed} km/h</p>
            </Details>
        </Container>
    );
};

CurrentWeather.propTypes = {
    temperature: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired
};

export default CurrentWeather;