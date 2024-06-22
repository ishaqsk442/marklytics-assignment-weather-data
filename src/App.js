import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Dropdown from './components/Dropdown';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('New York');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using JSONPlaceholder to fetch mock data
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        // Simulate weather data structure
        const formattedData = response.data.slice(0, 7).map((item, index) => ({
          date: `2024-06-${10 + index}`,
          temperature: Math.floor(Math.random() * 30) + 10,
          precipitation: Math.random() * 10
        }));
        setWeatherData(formattedData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch weather data. Please try again later.');
      }
    };
    fetchData();
  }, [city]);

  return (
    <>
      <GlobalStyles />
      <Header title="Weather Dashboard" description="Visualize weather data for different cities." />
      <Dropdown setCity={setCity} />
      {error ? <p>{error}</p> : (
        <>
          <LineChart data={weatherData} />
          <BarChart data={weatherData} />
        </>
      )}
    </>
  );
};

export default App;
