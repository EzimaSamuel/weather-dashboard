import React, { useEffect, useState } from 'react';
import axios from "axios";

const WeatherDashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = () => {
        axios
            .get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=155cba840620a463e6daca3fe699163d&units=metric", {
                
            })
            .then((response) => setData(response.data))
            .catch((error) => setError(error));
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div>
            <h1>Weather Dashboard</h1>
            {error && <p>Error fetching data: {error.message}</p>}
            {data ? (
                <div>
                    <p>City: {data.name}</p>
                    <p>Temperature: {data.main.temp}°C</p>
                    <p>Weather: {data.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WeatherDashboard;
