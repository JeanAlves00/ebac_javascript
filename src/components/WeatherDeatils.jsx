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

const DetailsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    color: ${({ theme }) => theme.colors.text};
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const DetailItem = styled.p`
    margin: 5px 0;
    font-size: 16px;
`;

const WeatherDetails = ({ humidity, windSpeed, precipitation }) => {
    return (
        <DetailsContainer>
            <DetailItem>Humidade: {humidity}%</DetailItem>
            <DetailItem>Velocidade do Vento: {windSpeed} km/h</DetailItem>
            <DetailItem>Precipitação: {precipitation} mm</DetailItem>
        </DetailsContainer>
    );
};

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    precipitation: PropTypes.number.isRequired
};

export default WeatherDetails;