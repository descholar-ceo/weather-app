class WeatherSearch {
  static displayWeatherSearchSection = (rootElement) => {
    const weatherElt = `
    <main class="main-page width-100 height-100">
      <section class="homepage-section width-100 padding-2 centered-h-v"> 
        <div class="white-transparent-bg padding-lg-half width-80 centered-horizontal black-text rounded-corners-1 box-with-shadows">
          <h1 class="centered-text black-text margin-2">Weather App: Get weather info from anywhere on the world!!!</h1>     
          <form class="width-90 centered-horizontal">
            <input
              placeholder="Enter the name of the city here... "
              class="width-80 rounded-corners-half"
              type="text"
              id="location-input-field">
            <button id="seacrh-btn-id" class="button-primary white-text width-10" type="button">Search</button>
          </form>
          <div class="search-result width-60 rounded-corners-1 white-text padding-2" id="search-result-div">
          
          </div>
      </div>
      </section>
    </main>
    `;

    rootElement.insertAdjacentHTML('beforeend', weatherElt);
  }

  static weatherCard = (weatherResult) => {
    const wCard = `
      <h2 class="centered-text">${weatherResult.name}, ${weatherResult.country}</h2>
      <div>
          <div><span>Main weather: </span><span>${weatherResult.main}</span></div>
          <div><span>Dscription: </span><span>${weatherResult.description}</span></div>
          <div><span>Temperature: </span><span>${weatherResult.temp}</span></div>
          <div><span>Max temperature: </span><span>${weatherResult.maxTemp}</span></div>
          <div><span>Min temperature: </span><span>${weatherResult.minTemp}</span></div>
          <div><span>Pressure: </span><span>${weatherResult.pressure}</span></div>
      </div>
    `;

    return wCard;
  };
}

export default WeatherSearch;
