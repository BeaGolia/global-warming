import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';

function MethanePage() {
  const [methaneData, setMethaneData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://global-warming.org/api/methane-api')
      .then((response) => {
        setMethaneData(response.data.methane);
        setLoading(false);
      })
      .catch((error) => {
         console.error(error);
         setLoading(false);
        });
    }, []);

  const chartData = {
    labels: methaneData.map(item => item.date),
    datasets: [
      {
        label: 'Methane Trend',
        data: methaneData.map(item => item.trend),
        backgroundColor: 'rgba(54,162,235,0.4)',
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>Methane Data | Global Warming Dashboard</title>
      </Helmet>
      <h1>Methane Data</h1>
      {loading ? ( <Loader /> ) : (
      <div className="chart-container">
        <Line data={chartData} />
      </div>
      )}
      <p>Methane (CH4) is a powerful greenhouse gas, and is the second-largest contributor to climate warming after carbon dioxide (CO2).</p>
      <p> A molecule of methane traps more heat than a molecule of CO2, but methane has a relatively short lifespan of 7 to 12 years in the atmosphere, while CO2 can persist for hundreds of years or more.</p>
      <p>The concentration of methane in the atmosphere has more than doubled over the past 200 years. Scientists estimate that this increase is responsible for 20 to 30% of climate warming since the Industrial Revolution (which began in 1750).</p>
      <p>For more information, please check <a href="https://climate.nasa.gov/vital-signs/methane/?intent=121" target='_blank' rel="noreferrer">Nasa</a>.</p>
    </div>
  );
}

export default MethanePage;




