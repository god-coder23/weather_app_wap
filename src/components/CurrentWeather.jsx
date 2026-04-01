import { MapPin, ThermometerSun, Cloud, Sun, CloudRain, CloudSun, Wind } from 'lucide-react';
import './CurrentWeather.css';

const WeatherIcon = ({ condition, size = 64 }) => {
  switch (condition?.toLowerCase()) {
    case 'partly cloudy':
      return <CloudSun size={size} className="weather-animate" />;
    case 'cloudy':
      return <Cloud size={size} className="weather-animate" />;
    case 'rain':
      return <CloudRain size={size} className="weather-animate" />;
    case 'sunny':
      return <Sun size={size} className="weather-animate" />;
    default:
      return <ThermometerSun size={size} className="weather-animate" />;
  }
};

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { city, country, current } = data;

  return (
    <div className="current-weather glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="location-section">
        <MapPin size={24} className="location-icon" />
        <h1 className="city-name">{city}, {country}</h1>
      </div>

      <div className="main-temp-section">
        <div className="temp-display">
          <span className="temperature">{current.temp}°</span>
          <div className="condition-info">
            <h2 className="condition-text">{current.condition}</h2>
            <div className="high-low">
              <span>H: {current.high}°</span>
              <span>L: {current.low}°</span>
            </div>
          </div>
        </div>
        
        <div className="icon-display">
          <WeatherIcon condition={current.condition} />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
