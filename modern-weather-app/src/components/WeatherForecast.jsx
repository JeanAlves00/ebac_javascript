import React from 'react';
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

const ForecastContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const DayCard = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    padding: 15px;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
    flex: 1;
    min-width: 120px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`;

const DateText = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 18px;
`;

const TempText = styled.p`
    margin: 5px 0 0 0;
    font-size: 16px;
`;

const WeatherForecast = ({ forecast }) => {
    return (
        <ForecastContainer>
            {forecast.map((day, index) => (
                <DayCard key={index}>
                    <DateText>{day.date}</DateText>
                    <TempText>Min: {day.minTemp}°C</TempText>
                    <TempText>Max: {day.maxTemp}°C</TempText>
                </DayCard>
            ))}
        </ForecastContainer>
    );
};

WeatherForecast.propTypes = {
    forecast: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            minTemp: PropTypes.number.isRequired,
            maxTemp: PropTypes.number.isRequired
        })
    ).isRequired
};

export default WeatherForecast;