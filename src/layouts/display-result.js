import { customizeBackgroundColor, searchResultJson } from '../handlers/handle-search';
import WeatherSearch from './weather-search';

const displayResult = async (inputField, outputBox) => {
  const res = await searchResultJson(inputField);
  let htmlToDisplay;
  if (res.cod === 200) {
    htmlToDisplay = WeatherSearch.weatherCard(res);
  } else {
    htmlToDisplay = res.message;
  }
  outputBox.classList.add(customizeBackgroundColor(res.temp));
  outputBox.innerHTML = htmlToDisplay;
};

export default displayResult;