import { fetchAPI } from './utils/fetch.js';
import { weatherUI } from './views/desainUI.js';
import setAttribute from './utils/setAttribute.js';
import { sunIcon, moonIcon } from './views/toggleWeatherIcons.js';

const formSearchCity = document.querySelector('.form-search');
const weatherCardContainer = document.querySelector('.content-weather');
const btnToggleTheme = document.querySelector('.btn-toggle-theme');

let weatherTheme = localStorage.getItem('weatherTheme') || 'light';

// reload window
// todo: set attribute window and render weather with default value
window.addEventListener('DOMContentLoaded', async () => {
  setAttribute(weatherTheme);

  const result = await fetchAPI('denpasar');
  if (result.cod !== 200) {
    window.alert(result.message);
  } else {
    const weatherDesain = weatherUI(result);
    weatherCardContainer.innerHTML = weatherDesain;
  }

  // check weather and control toggle icon
  if (weatherTheme === 'light') {
    btnToggleTheme.innerHTML = moonIcon;
  } else {
    btnToggleTheme.innerHTML = sunIcon;
  }
});

// search city event
formSearchCity.addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputSearchCity = document.getElementById('search-location').value;
  const result = await fetchAPI(inputSearchCity);
  if (result.cod !== 200) {
    window.alert(result.message);
  } else {
    const weatherDesain = weatherUI(result);
    weatherCardContainer.innerHTML = weatherDesain;
  }

  e.target.reset();
});

btnToggleTheme.addEventListener('click', () => {
  if (weatherTheme === 'light') {
    setAttribute('dark');
    weatherTheme = 'dark';
    btnToggleTheme.innerHTML = sunIcon;
  } else {
    setAttribute('light');
    weatherTheme = 'light';
    btnToggleTheme.innerHTML = moonIcon;
  }
});
