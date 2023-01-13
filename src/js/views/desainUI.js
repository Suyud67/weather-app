const weatherUI = (data) => {
  const { main, name, weather, wind } = data;
  return `
        <h3 class="city">📍 ${name}</h3>
        <div class="weather">
          <div class="desc-weather">
            <div class="temprature">${Math.round(main.temp)}℃</div>
            <div class="optional-desc-weather">
              <div class="humidity">
                <div class="desc-img-weather">
                  <img src="https://cdn-icons-png.flaticon.com/512/9290/9290540.png" alt="" class="img-icon" />
                </div>
                <div class="img-weather-desc">${main.humidity}%</div>
              </div>
              <div class="wind">
                <div class="desc-img-weather">
                  <img src="https://cdn-icons-png.flaticon.com/512/2011/2011448.png" alt="" class="img-icon" />
                </div>
                <div class="img-weather-desc">${wind.speed} Kmph</div>
              </div>
            </div>
          </div>
          <div class="img-weather">
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].main}" class="img-icon" />
            <div class="img-weather-desc">${weather[0].description}</div>
          </div>
          </div>
    `;
};

export { weatherUI };
