import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import WeatherDetails from './components/WeatherDetails';
import './App.css';

// Mock Data for UI demonstration
const MOCK_WEATHER = {
  city: 'San Francisco',
  country: 'US',
  current: {
    temp: 72,
    condition: 'Partly Cloudy',
    high: 75,
    low: 58,
  },
  details: {
    humidity: 45,
    wind: 12,
    uv: 6,
    visibility: 10,
    feelsLike: 70,
    pressure: 1012,
  },
  hourly: [
    { time: 'Now', temp: 72, icon: 'cloud-sun' },
    { time: '1 PM', temp: 74, icon: 'sun' },
    { time: '2 PM', temp: 75, icon: 'sun' },
    { time: '3 PM', temp: 73, icon: 'cloud-sun' },
    { time: '4 PM', temp: 71, icon: 'cloud' },
    { time: '5 PM', temp: 68, icon: 'cloud' },
  ],
  daily: [
    { day: 'Today', min: 58, max: 75, icon: 'cloud-sun', condition: 'Partly Cloudy' },
    { day: 'Tue', min: 55, max: 70, icon: 'cloud', condition: 'Cloudy' },
    { day: 'Wed', min: 52, max: 68, icon: 'cloud-rain', condition: 'Rain' },
    { day: 'Thu', min: 54, max: 72, icon: 'sun', condition: 'Sunny' },
    { day: 'Fri', min: 56, max: 74, icon: 'sun', condition: 'Sunny' },
    { day: 'Sat', min: 55, max: 71, icon: 'cloud-sun', condition: 'Partly Cloudy' },
    { day: 'Sun', min: 53, max: 69, icon: 'cloud', condition: 'Cloudy' },
  ]
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    setSearchQuery(query);
    // In a real app, you would fetch API data here based on query
  };

  return (
    <div className="app-container animate-fade-in">
      <div className="dashboard-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <main className="dashboard glass-panel">
        <div className="left-panel">
          <SearchBar onSearch={handleSearch} />
          <CurrentWeather data={MOCK_WEATHER} />
          <HourlyForecast data={MOCK_WEATHER.hourly} />
        </div>
        
        <div className="right-panel">
          <WeatherDetails data={MOCK_WEATHER.details} />
          <DailyForecast data={MOCK_WEATHER.daily} />
        </div>
      </main>
    </div>
  );
}

export default App;
