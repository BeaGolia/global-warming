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
      <p>Nitrogen Dioxide (NO2) is one of a group of highly reactive gases known as oxides of nitrogen or nitrogen oxides (NOx). </p>
      <p>NO2 primarily gets in the air from the burning of fuel. NO2 forms from emissions from cars, trucks and buses, power plants, and off-road equipment.</p>
      <p>Breathing air with a high concentration of NO2 can irritate airways in the human respiratory system. Such exposures over short periods can aggravate respiratory diseases.</p>
      <p>NO2 and other NOx interact with water, oxygen and other chemicals in the atmosphere to form acid rain. Acid rain harms sensitive ecosystems such as lakes and forests.
        The nitrate particles that result from NOx make the air hazy and difficult to see though. 
        Finally, NOx in the atmosphere contributes to nutrient pollution in coastal waters.</p>
      <p>For more information, please check <a href="https://www.epa.gov/no2-pollution/basic-information-about-no2" target='_blank' rel="noreferrer">EPA</a>.</p>
    </div>
  );
}

export default NO2Page;



