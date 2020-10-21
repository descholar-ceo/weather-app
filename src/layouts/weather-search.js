class WeatherSearch {
  static displayWeatherSearchSection = (rootElement) => {
    const weatherElt = `
    <div>
      <form>
        <input type="text" id="location-input-field">
        <button type="button">Search</button>
      </form>
      <div class="search-result" id="search-result"></div>
    </div>
    `;

    rootElement.insertAdjacentHTML('beforeend', weatherElt);
  }
}

export default WeatherSearch;
