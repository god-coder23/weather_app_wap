import { Droplets, Wind, Sun, Eye, Thermometer, Gauge } from 'lucide-react';
import './WeatherDetails.css';

const WeatherDetails = ({ data }) => {
  if (!data) return null;

  const detailsList = [
    { label: 'Feels Like', value: `${data.feelsLike}°`, icon: <Thermometer size={24} /> },
    { label: 'Wind', value: `${data.wind} mph`, icon: <Wind size={24} /> },
    { label: 'Humidity', value: `${data.humidity}%`, icon: <Droplets size={24} /> },
    { label: 'UV Index', value: data.uv, icon: <Sun size={24} /> },
    { label: 'Visibility', value: `${data.visibility} mi`, icon: <Eye size={24} /> },
    { label: 'Pressure', value: `${data.pressure} hPa`, icon: <Gauge size={24} /> },
  ];

  return (
    <div className="weather-details glass-panel animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="details-grid">
        {detailsList.map((item, index) => (
          <div key={index} className="detail-item">
            <div className="detail-icon">{item.icon}</div>
            <div className="detail-info">
              <span className="detail-label">{item.label}</span>
              <span className="detail-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
