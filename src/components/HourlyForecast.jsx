import { Clock, Cloud, Sun, CloudRain, CloudSun } from 'lucide-react';
import './HourlyForecast.css';

const IconMini = ({ icon, size = 24 }) => {
  switch (icon) {
    case 'cloud-sun':
      return <CloudSun size={size} />;
    case 'cloud':
      return <Cloud size={size} />;
    case 'cloud-rain':
      return <CloudRain size={size} />;
    case 'sun':
      return <Sun size={size} />;
    default:
      return <Sun size={size} />;
  }
};

const HourlyForecast = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="hourly-forecast glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="section-header">
        <Clock size={18} className="header-icon" />
        <h3>Hourly Forecast</h3>
      </div>
      
      <div className="hourly-scroll-container">
        {data.map((hour, index) => (
          <div key={index} className="hourly-item">
            <span className="hourly-time">{hour.time}</span>
            <div className="hourly-icon-wrapper">
              <IconMini icon={hour.icon} />
            </div>
            <span className="hourly-temp">{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
