// src/components/CO2.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function CO2Page() {
  const [co2Data, setCo2Data] = useState([]);

  useEffect(() => {
    axios.get('https://global-warming.org/api/co2-api')
      .then((response) => setCo2Data(response.data.co2))
      .catch((error) => console.error(error));
  }, []);

  const chartData = {
    labels: co2Data.map(item => `${item.year}-${item.month}`),
    datasets: [
      {
        label: 'CO2 Trend',
        data: co2Data.map(item => item.trend),
        backgroundColor: 'rgba(255,99,132,0.4)',
      },
    ],
  };

  return (
    <div>
      <h1>CO2 Data</h1>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
      <p>Carbon dioxide (CO2) is an important heat-trapping gas, also known as a greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and natural processes like volcanic eruptions.</p>
      <p>Since the onset of industrial times in the 18th century, human activities have raised atmospheric CO2 by 50% – meaning the amount of CO2 is now 150% of its value in 1750. This human-induced rise is greater than the natural increase observed at the end of the last ice age 20,000 years ago.</p>
      <p>For more information, please check <a href="https://climate.nasa.gov/vital-signs/carbon-dioxide/?intent=121" target='_blank' rel="noreferrer">Nasa</a>.</p>
    </div>
  );
}

export default CO2Page;

