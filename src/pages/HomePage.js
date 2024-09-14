// src/pages/Home.js

import { Link } from 'react-router-dom';
import logo from '../iceberg.jpg';

function HomePage() {
  return (
    <div className="intro">
      <h1>Global Warming Dashboard</h1>
      <p>Global warming is the long-term warming of the planet’s overall temperature. Though this warming trend has been going on for a long time, its pace has significantly increased in the last hundred years due to the burning of fossil fuels. As the human population has increased, so has the volume of fossil fuels burned. Fossil fuels include coal, oil, and natural gas, and burning them causes what is known as the “greenhouse effect” in Earth’s atmosphere.</p>
      <p>Global warming has presented another issue called climate change. Sometimes these phrases are used interchangeably, however, they are different. Climate change refers to changes in weather patterns and growing seasons around the world. It also refers to sea level rise caused by the expansion of warmer seas and melting ice sheets and glaciers. Global warming causes climate change, which poses a serious threat to life on Earth in the forms of widespread flooding and extreme weather. Scientists continue to study global warming and its impact on Earth.</p>
      <p className="data">Select a category to view data:</p>
      <ul>
        <li><Link to="/temperature">Temperature</Link></li>
        <li><Link to="/co2">CO2</Link></li>
        <li><Link to="/methane">Methane</Link></li>
        <li><Link to="/no2">NO2</Link></li>
        <li><Link to="/ice">Polar Ice</Link></li>
      </ul>
      <p>Credits to <a href="https://education.nationalgeographic.org/resource/global-warming/" target='_blank' rel='noreferrer'>National Geographic</a>.</p>
      <img src={logo} alt="Iceberg" className="iceberg-image" />
    </div>
  );
}
export default HomePage;

