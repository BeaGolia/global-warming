const BASE_URL = process.env.REACT_APP_BASE_URL; 

export const getCO2Data = async () => {
  try {
    const response = await fetch(`${BASE_URL}co2-api`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.co2;
  } catch (error) {
    console.error('Error fetching CO2 data:', error);
    return [];
  }
};

export const getIceData = async () => {
  try {
    const response = await fetch(`${BASE_URL}arctic-api`);
    const data = await response.json();
    console.log(data); 
    return data.arcticData.data || []; 
  } catch (error) {
    console.error('Error fetching ice data:', error);
    return [];
  }
};


export const getMethaneData = async () => {
  try {
    const response = await fetch(`${BASE_URL}methane-api`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.methane;
  } catch (error) {
    console.error('Error fetching methane data:', error);
    return [];
  }
};

export const getN02Data = async () => {
  try {
    const response = await fetch(`${BASE_URL}nitrous-oxide-api`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.nitrous;
  } catch (error) {
    console.error('Error fetching NO2 data:', error);
    return [];
  }
};

export const getTemperatureData = async () => {
  try {
    const response = await fetch(`${BASE_URL}temperature-api`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching temperature data:', error);
    return [];
  }
};
