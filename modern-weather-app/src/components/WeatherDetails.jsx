import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const DetailsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const DetailItem = styled.div`
    margin: 10px 0;
    font-size: 18px;
`;

const WeatherDetails = ({ humidity, windSpeed, precipitation }) => {
    return (
        <DetailsContainer>
            <DetailItem>Humidity: {humidity}%</DetailItem>
            <DetailItem>Wind Speed: {windSpeed} km/h</DetailItem>
            <DetailItem>Precipitation: {precipitation} mm</DetailItem>
        </DetailsContainer>
    );
};

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    precipitation: PropTypes.number.isRequired
};

export default WeatherDetails;