import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For fetching data
import Header from './components/Header'; // Header component
import LineChart from './components/LineChart'; // Line chart component
import BarChart from './components/BarChart'; // Bar chart component
import PieChart from './components/PieChart'; // Pie chart component
import RadarChart from './components/RadarChart'; // Radar chart component
import Dropdown from './components/Dropdown'; // Dropdown component
import GlobalStyles from './styles/GlobalStyles'; // Global styles

const App = () => {
  const [weatherData, setWeatherData] = useState([]); // State for weather data
  const [city, setCity] = useState('New York'); // State for selected city
  const [error, setError] = useState(null); // State for error handling

  // Fetch data whenever the selected city changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching mock data from JSONPlaceholder API
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        // Formatting the data to match our needs
        const formattedData = response.data.slice(0, 7).map((item, index) => ({
          date: `2024-06-${10 + index}`,
          temperature: Math.floor(Math.random() * 30) + 10,
          precipitation: Math.random() * 10,
          humidity: Math.random() * 100,
          windSpeed: Math.random() * 15
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
          <PieChart data={weatherData} />
          <RadarChart data={weatherData} />
        </>
      )}
    </>
  );
};

export default App;
