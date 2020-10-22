const handleSearch = async (inputField) => {
  const searchQuery = inputField.value;
  const response = await fetch(
    `${process.env.API_LINK}?q=${searchQuery}&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const resJson = await response.json();
  // console.log(resJson);
  const {
    feels_like: realFeel,
    humidity,
    pressure,
    temp,
    temp_max: maxTemp,
    temp_min: minTemp,
  } = resJson.main;
  const { name } = resJson;
  const {
    country,
    sunrise,
    sunset,
  } = resJson.sys;
  const [details] = resJson.weather;
  const { main, description, icon } = details;
  return {
    realFeel,
    humidity,
    pressure,
    temp,
    maxTemp,
    minTemp,
    name,
    country,
    sunrise,
    sunset,
    main,
    description,
    icon,
  };
};

export default handleSearch;
