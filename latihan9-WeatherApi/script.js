const searchBtn = document.querySelector('.search-btn');

// tombol search di click
searchBtn.addEventListener('click', async function () {
  try {
    const inputField = document.querySelector('.search-input').value;
    const weather = await getWeather(inputField);
    weatherUI(weather);
  } catch (error) {
    alert(error);
  }
});

// page reload
async function reset(nmCountry) {
  const callCountry = await getWeather(nmCountry);
  weatherUI(callCountry);
}
reset('bali');

// connect to api
function getWeather(keyword) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=31bcd75755b4170cf5d94501040a0ffc&units=metric`)
    .then((response) => {
      if (response.status == 404) {
        throw new Error('your country is not found');
      } else if (response.status == 400) {
        throw new Error('insert name of your country!!');
      } else if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => data);
}

// display
function weatherUI(data) {
  let isiMain = mainContent(data);
  let isiDesc = descContent(data);
  const mainMenu = document.querySelector('.main-menu');
  const descMenu = document.querySelector('.desc');
  mainMenu.innerHTML = isiMain;
  descMenu.innerHTML = isiDesc;
}

function mainContent(data) {
  const { name, wind, main, weather } = data;
  return `<div class="content-desc">
            <h1 class="country-name">${name}</h1>
            <div class="suhu">${Math.round(main.temp)}<span>°C</span></div>
          </div>
          <div class="img-content">
            <img src='https://openweathermap.org/img/wn/${weather[0].icon}@2x.png' alt="${weather[0].icon} ">
            <div class="desc-img">${weather[0].description}</div>
          </div>`;
}

function descContent(data) {
  const { name, wind, main, weather } = data;
  return `<div class="box">
            <span><i class="wi wi-strong-wind fa-2x"></i></span>
            <div class="desc-icon">Wind</div>
            <p class="wind">${wind.speed} <span>Kmph</span></p>
          </div>
          <div class="box">
            <span><i class="wi wi-humidity fa-2x"></i></span>
            <div class="desc-icon">Humidity</div>
            <p class="humidity">${main.humidity}<span>%<span></p>
          </div>`;
}
