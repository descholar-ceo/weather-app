const handleSearch = (inputField) => {
  const searchQuery = inputField.value;
  fetch('https://openweatherapp.p.rapidapi.com/', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'x-rapidapi-host': 'openweatherapp.p.rapidapi.com',
      'x-rapidapi-key': 'bb3ebde477msh2bc5f9123f0cc95p1d6922jsn4f0b847ad367',
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: {},
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  console.log(searchQuery);
};

export default handleSearch;
