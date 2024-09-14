import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function IcePage() {
  const [iceData, setIceData] = useState([]);

  useEffect(() => {
    axios.get('https://global-warming.org/api/arctic-api')
      .then((response) => setIceData(Object.entries(response.data.arcticData.data)))
      .catch((error) => console.error(error));
  }, []);

  const chartData = {
    labels: iceData.map(item => item[0]),
    datasets: [
      {
        label: 'Arctic Ice Extent',
        data: iceData.map(item => item[1].value),
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return (
    <div>
      <h1>Arctic Ice Data</h1>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
      <p>Data from NASA's GRACE and GRACE Follow-On satellites show that the land ice sheets in both Antarctica (upper chart) and Greenland (lower chart) have been losing mass since 2002.</p>
      <p>This is important because the ice sheets of Greenland and Antarctica store about two-thirds of all the fresh water on Earth. They are losing ice due to the ongoing warming of Earth’s surface and ocean. Meltwater coming from these ice sheets is responsible for about one-third of the global average rise in sea level since 1993.</p>
      <p>For more information, please check <a href="https://climate.nasa.gov/vital-signs/ice-sheets/?intent=121" target='_blank' rel="noreferrer">Nasa</a>.</p>
    </div>
  );
}

export default IcePage;
