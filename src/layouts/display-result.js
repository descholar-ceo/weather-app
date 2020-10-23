import searchResultJson from '../handlers/handle-search';
import WeatherSearch from './weather-search';

const displayResult = async (inputField, outputBox) => {
  const res = await searchResultJson(inputField);
  outputBox.innerHTML = WeatherSearch.weatherCard(res);
};

export default displayResult;