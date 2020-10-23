import './assets/styles/styles.scss';
import displayResult from './layouts/display-result';
import WeatherSearch from './layouts/weather-search';

const rootElt = document.querySelector('#root');
WeatherSearch.displayWeatherSearchSection(rootElt);
const searchBtn = document.querySelector('#seacrh-btn-id');
const locationInputField = document.querySelector('#location-input-field');
const searchResultDiv = document.querySelector('#search-result-div');
const unitsToggle = document.querySelector('#units-toggle');

searchBtn.addEventListener('click', () => {
  searchResultDiv.setAttribute('class', 'search-result width-30 rounded-corners-1 white-text padding-1 centered-text centered-h-v');
  searchResultDiv.innerHTML = '<div class="loader"/>';
  displayResult(locationInputField, searchResultDiv, unitsToggle.checked);
});

unitsToggle.addEventListener('click', () => {
  searchResultDiv.setAttribute('class', 'search-result width-30 rounded-corners-1 white-text padding-1 centered-text centered-h-v');
  searchResultDiv.innerHTML = '<div class="loader"/>';
  displayResult(locationInputField, searchResultDiv, unitsToggle.checked);
});
