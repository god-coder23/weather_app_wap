import { Calendar, Cloud, Sun, CloudRain, CloudSun } from 'lucide-react';
import './DailyForecast.css';

const IconMini = ({ icon, size = 20 }) => {
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

const DailyForecast = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="daily-forecast glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="section-header">
        <Calendar size={18} className="header-icon" />
        <h3>7-Day Forecast</h3>
      </div>
      
      <div className="daily-list">
        {data.map((day, index) => (
          <div key={index} className="daily-item">
            <span className="daily-day">{day.day}</span>
            <div className="daily-condition">
              <IconMini icon={day.icon} />
              <span className="condition-text-small">{day.condition}</span>
            </div>
            <div className="daily-temps">
              <span className="temp-low">{day.min}°</span>
              <div className="temp-bar">
                <div 
                  className="temp-bar-fill" 
                  style={{ 
                    left: `${((day.min - 40) / 60) * 100}%`,
                    width: `${((day.max - day.min) / 60) * 100}%`
                  }} 
                />
              </div>
              <span className="temp-high">{day.max}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
