class WeatherSearch {
  static displayWeatherSearchSection = (rootElement) => {
    const weatherElt = `
    <main class="main-page width-100 height-100" id="main-page">
      <section class="homepage-section width-100 padding-2 centered-h-v"> 
        <div class="white-transparent-bg padding-lg-half width-80 centered-horizontal black-text rounded-corners-1 box-with-shadows">
          <h1 class="centered-text black-text margin-2">Weather App: Get weather info from anywhere on the world!!!</h1>     
          <form class="width-60 centered-horizontal  flex-horizontal-center">
              <input
              placeholder="Enter the name of the city here... "
              class="width-60 rounded-corners-half centered-text text-1-next"
              type="text"
              id="location-input-field">
              <button id="seacrh-btn-id" class="button-primary white-text width-10" type="button">Search</button>
              <div class="centered-horizontal">
                <span class="bold-text">°C</span>
                <label class="switch">
                  <input type="checkbox" id="units-toggle">
                  <span class="slider round"></span>
                </label>
                <span class="bold-text">°F</span>
              </div>
          </form>
          <div
            class="search-result width-30 rounded-corners-1 white-text padding-1 centered-text centered-h-v"
            id="search-result-div">Result appear here</div>
      </div>
      </section>
    </main>
    `;

    rootElement.insertAdjacentHTML('beforeend', weatherElt);
  }

  static weatherCard = (weatherResult, unit) => {
    const iconSrc = `https://openweathermap.org/img/wn/${weatherResult.icon}@2x.png`;
    const wCard = `
    <div><img src="${iconSrc}"/></div>
    <div><span>${weatherResult.main}</span></div>
      <h2 class="centered-text">${weatherResult.name}, ${weatherResult.country}</h2>
      <div class="line-height centered-text">
          <div><span>Description: </span><span>${weatherResult.description}</span></div>
          <div><span>Temperature: </span><span>${weatherResult.temp}${unit}</span></div>
          <div><span>Max temperature: </span><span>${weatherResult.maxTemp}${unit}</span></div>
          <div><span>Min temperature: </span><span>${weatherResult.minTemp}${unit}</span></div>
          <div><span>Pressure: </span><span>${weatherResult.pressure}hPa</span></div>
          <div><span>Humidity: </span><span>${weatherResult.humidity}%</span></div>
      </div>
    `;

    return wCard;
  };
}

export default WeatherSearch;
