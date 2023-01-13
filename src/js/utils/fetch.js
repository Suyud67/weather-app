const fetchAPI = async (keyword) => {
  const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=31bcd75755b4170cf5d94501040a0ffc&units=metric`);
  const response = await fetchData.json();

  return response;
};

export { fetchAPI };
