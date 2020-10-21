import './assets/styles/styles.scss';
import handleSearch from './handlers/handle-search';
import WeatherSearch from './layouts/weather-search';

const rootElt = document.querySelector('#root');
WeatherSearch.displayWeatherSearchSection(rootElt);
const searchBtn = document.querySelector('#seacrh-btn-id');
const locationInputField = document.querySelector('#location-input-field');

searchBtn.addEventListener('click', () => {
  handleSearch(locationInputField);
});
