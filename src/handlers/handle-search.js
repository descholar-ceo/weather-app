const handleSearch = async (inputField) => {
  const searchQuery = inputField.value;
  const response = await fetch(
    `${process.env.API_LINK}?q=${searchQuery}&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const resJson = await response.json();
  console.log(resJson);
};

export default handleSearch;
