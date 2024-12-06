import React from 'react';
import WeatherDashboard from "./components/WeatherDashboard"; // Adjust the path as needed
import './App.css'; // Optional CSS file for styling

const App = () => {
    return (
        <div className="app-container">
            <header>
                <h1>Weather App</h1>
            </header>
            <main>
                <WeatherDashboard />
            </main>
        </div>
    );
};

export default App;
