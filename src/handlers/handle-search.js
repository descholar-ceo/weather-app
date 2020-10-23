const handleSearch = async (inputField) => {
  const searchQuery = inputField.value;
  let res;
  try {
    res = await fetch(
      `${process.env.API_LINK}?q=${searchQuery}&appid=${process.env.API_KEY}`,
      { mode: 'cors' },
    );
  } catch (err) {
    res = err;
  }
  return res;
};

export const searchResultJson = async (inputField) => {
  const searchResult = await handleSearch(inputField);
  const resJson = await searchResult.json();
  let res;
  if (resJson.cod === 200) {
    resJson.main.temp = (resJson.main.temp - 273.15).toFixed(2);
    resJson.main.temp_max = (resJson.main.temp_max - 273.15).toFixed(2);
    resJson.main.temp_min = (resJson.main.temp_min - 273.15).toFixed(2);
    const {
      feels_like: realFeel,
      humidity,
      pressure,
      temp,
      temp_max: maxTemp,
      temp_min: minTemp,
    } = resJson.main;
    const { name, cod } = resJson;
    const { country } = resJson.sys;
    const [details] = resJson.weather;
    const { main, description, icon } = details;
    res = {
      cod,
      realFeel,
      humidity,
      pressure,
      temp,
      maxTemp,
      minTemp,
      name,
      country,
      main,
      description,
      icon,
    };
  } else {
    res = { cod: 404, message: resJson.message };
  }

  return res;
};

export const customizeBackgroundColor = (temp) => {
  if (temp > 30) {
    return 'hot-weather';
  } if (temp <= 30 && temp >= 20) {
    return 'medium-wether';
  }
  return 'cold-weather';
};

export const convertCeliciusToFahreneit = (temp) => ((temp * 1.8) + 32).toFixed(2);
