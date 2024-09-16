import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';

function NO2Page() {
  const [no2Data, setNo2Data] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('https://global-warming.org/api/nitrous-oxide-api')
      .then((response) => {
        setNo2Data(response.data.nitrous);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels: no2Data.map(item => item.date),
    datasets: [
      {
        label: 'NO2 Trend',
        data: no2Data.map(item => item.trend),
        backgroundColor: 'rgba(153,102,255,0.4)',
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>NO2 Data | Global Warming Dashboard</title>
      </Helmet>
      <h1>NO2 Data</h1>
      {loading ? ( <Loader /> ) : (
      <div className="chart-container">
        <Line data={chartData} />
      </div>
      )}
      <p>In 2022, nitrous oxide (N2O) accounted for 6% of all U.S. greenhouse gas emissions from human activities. Human activities such as agriculture, fuel combustion, wastewater management, and industrial processes are increasing the amount of N2O in the atmosphere. </p>
      <p>Nitrous oxide molecules stay in the atmosphere for an average of 121 years before being removed by a sink or destroyed through chemical reactions. The impact of 1 pound of N2O on warming the atmosphere is 265 times that of 1 pound of carbon dioxide.</p>
      <p>Globally, 40% of total N2O emissions come from human activities.</p>
      <p>For more information, please check <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#:~:text=The%20impact%20of%201%20pound,1%20pound%20of%20carbon%20dioxide.&text=Globally%2C%2040%25%20of%20total%20N,emissions%20come%20from%20human%20activities.&text=Nitrous%20oxide%20is%20emitted%20from,and%20other%20activities%2C%20described%20below." target='_blank' rel="noreferrer">EPA</a>.</p>
    </div>
  );
}

export default NO2Page;



