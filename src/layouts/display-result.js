import {
  convertCeliciusToFahreneit,
  customizeBackgroundColor,
  searchResultJson,
} from '../handlers/handle-search';
import WeatherSearch from './weather-search';

export const displayResult = async (inputField, outputBox, isCelcius) => {
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

export const loadResult = (locationInputField, searchResultDiv, unitsToggle) => {
  const classes = 'search-result width-30 rounded-corners-1 white-text padding-1 centered-text centered-h-v';
  searchResultDiv.setAttribute('class', classes);
  searchResultDiv.innerHTML = '<div class="loader"/>';
  displayResult(locationInputField, searchResultDiv, unitsToggle.checked);
};
