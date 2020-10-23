import { convertCeliciusToFahreneit, customizeBackgroundColor, searchResultJson } from '../handlers/handle-search';
import WeatherSearch from './weather-search';

const displayResult = async (inputField, outputBox, isCelcius) => {
  const res = await searchResultJson(inputField);
  outputBox.classList.add(customizeBackgroundColor(res.temp));
  let unit = '°C';
  if (isCelcius) {
    res.temp = convertCeliciusToFahreneit(res.temp);
    res.maxTemp = convertCeliciusToFahreneit(res.maxTemp);
    res.minTemp = convertCeliciusToFahreneit(res.minTemp);
    unit = '°F';
  }
  let htmlToDisplay;
  if (res.cod === 200) {
    htmlToDisplay = WeatherSearch.weatherCard(res, unit);
  } else {
    htmlToDisplay = res.message;
  }
  outputBox.innerHTML = htmlToDisplay;
};

export default displayResult;