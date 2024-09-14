import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function TemperaturePage() {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    axios.get('https://global-warming.org/api/temperature-api')
      .then((response) => setTemperatureData(response.data.result))
      .catch((error) => console.error(error));
  }, []);

  const chartData = {
    labels: temperatureData.map(item => item.time),
    datasets: [
      {
        label: 'Land Temperature',
        data: temperatureData.map(item => item.land),
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return (
    <div>
      <h1>Temperature Data</h1>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
      <p>Air temperatures on Earth have been rising since the Industrial Revolution. While natural variability plays some part, the preponderance of evidence indicates that human activities—particularly emissions of heat-trapping greenhouse gases—are mostly responsible for making our planet warmer.</p>
      <p>According to an ongoing temperature analysis led by scientists at NASA’s Goddard Institute for Space Studies (GISS), the average global temperature on Earth has increased by at least 1.1° Celsius (1.9° Fahrenheit) since 1880. The majority of the warming has occurred since 1975, at a rate of roughly 0.15 to 0.20°C per decade.</p>
      <p>For more information, please check <a href="https://earthobservatory.nasa.gov/world-of-change/global-temperatures" target='_blank' rel="noreferrer">Nasa</a>.</p>
    </div>
  );
}

export default TemperaturePage;

