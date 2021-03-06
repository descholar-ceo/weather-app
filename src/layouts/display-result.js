import {
  convertCeliciusToFahreneit,
  customizeBackgroundColor,
  searchResultJson,
} from '../handlers/handle-search';
import WeatherSearch from './weather-search';

export const displayResult = async (mainContainer, inputField, outputBox, isCelcius) => {
  const res = await searchResultJson(inputField);
  mainContainer.classList.remove('default-bg');
  outputBox.classList.add(customizeBackgroundColor(res.temp));
  mainContainer.classList.add(customizeBackgroundColor(res.temp));
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

export const loadResult = (locationInputField, searchResultDiv, unitsToggle, mainContainer) => {
  const classes = 'search-result width-30 rounded-corners-1 white-text padding-1 centered-text centered-h-v';
  mainContainer.setAttribute('class', 'main-container default-bg');
  searchResultDiv.setAttribute('class', classes);
  searchResultDiv.innerHTML = '<div class="loader"/>';
  displayResult(mainContainer, locationInputField, searchResultDiv, unitsToggle.checked);
};
