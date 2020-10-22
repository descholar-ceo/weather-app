import './assets/styles/styles.scss';
import displayResult from './layouts/display-result';
import WeatherSearch from './layouts/weather-search';

const rootElt = document.querySelector('#root');
WeatherSearch.displayWeatherSearchSection(rootElt);
const searchBtn = document.querySelector('#seacrh-btn-id');
const locationInputField = document.querySelector('#location-input-field');
const searchResultDiv = document.querySelector('#search-result-div');

searchBtn.addEventListener('click', () => {
  displayResult(locationInputField, searchResultDiv);
});
