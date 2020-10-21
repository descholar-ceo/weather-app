class WeatherSearch {
  static displayWeatherSearchSection = (rootElement) => {
    const weatherElt = `
    <main class="main-page width-100 height-100">
      <section class="homepage-section width-100 padding-2 centered-h-v">
        <div class="black-transparent-bg padding-5 padding-lg-half width-80 centered-horizontal black-text rounded-corners-1 box-with-shadows">
          <form class="width-90 centered-horizontal">
            <input class="width-80 rounded-corners-half" type="text" id="location-input-field">
            <button class="button-primary white-text width-10" type="button">Search</button>
          </form>
          <div class="search-result width-60 rounded-corners-1" id="search-result"></div>
        </div>
      </section>
    </main>
    `;

    rootElement.insertAdjacentHTML('beforeend', weatherElt);
  }
}

export default WeatherSearch;
