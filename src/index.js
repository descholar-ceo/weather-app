import './assets/styles/styles.scss';
import { loadResult } from './layouts/display-result';
import WeatherSearch from './layouts/weather-search';

const rootElt = document.querySelector('#root');
WeatherSearch.displayWeatherSearchSection(rootElt);
const searchBtn = document.querySelector('#seacrh-btn-id');
const locationInputField = document.querySelector('#location-input-field');
const searchResultDiv = document.querySelector('#search-result-div');
const unitsToggle = document.querySelector('#units-toggle');

searchBtn.addEventListener('click', () => loadResult(locationInputField, searchResultDiv, unitsToggle));
unitsToggle.addEventListener('click', () => loadResult(locationInputField, searchResultDiv, unitsToggle));
