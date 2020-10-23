import handleSearch from '../handlers/handle-search';
import WeatherSearch from './weather-search';

const displayResult = async (inputField, outputBox) => {
  const res = await handleSearch(inputField);
  outputBox.innerHTML = WeatherSearch.weatherCard(res);
};

export default displayResult;