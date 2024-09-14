import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemperaturePage from './pages/TemperaturePage';
import CO2Page from './pages/CO2Page';
import MethanePage from './pages/MethanePage';
import NO2Page from './pages/NO2Page';
import IcePage from './pages/IcePage';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/temperature" element={<TemperaturePage />} />
          <Route path="/co2" element={<CO2Page />} />
          <Route path="/methane" element={<MethanePage />} />
          <Route path="/no2" element={<NO2Page />} />
          <Route path="/ice" element={<IcePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
