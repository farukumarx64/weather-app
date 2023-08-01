export default function updateUI(weather) {

  const date = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let random = Math.floor(Math.random() * 4) + 1;


  // Declare Variables
  let temperature = document.querySelector('.temperature');
  let city = document.querySelector('.city');
  let conditionIcon = document.querySelector('.cond-icon');
  let condition = document.querySelector('.condition-text');
  let feelsLike = document.querySelector('.feels-like');
  let humidity = document.querySelector('.humidity');
  let wind = document.querySelector('.wind');
  let uvIndex = document.querySelector('.uv-index');
  let cloud = document.querySelector('.cloud');
  let country = document.querySelector('.country');
  let time = document.querySelector('.time');
  let weatherBackground = document.querySelector('.weather-background');
  let searchBtn = document.querySelector('.icon');
  let searchIcon = document.querySelector('.icon i');


  // Details
  temperature.textContent = `${weather.getTemperature()}°`;
  city.textContent = `${weather.getName()}`;
  time.textContent = `${date.getHours()}:${parseInt(date.getMinutes()).toString().padStart(2, 0)} - ${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]} '${parseInt(date.getFullYear()).toString().slice(2)}`;
  condition.textContent = `${weather.getCondition()}`;
  conditionIcon.setAttribute('src', `${weather.getIcon()}`);

  // Weather Details 
  country.textContent = `${weather.getCountry()}`;
  cloud.textContent = `${weather.getCloud()}%`;
  humidity.textContent = `${weather.getHumidity()}%`;

  // Extra Info
  feelsLike.textContent = `${weather.getFeelsLike()}°C`;
  console.log(typeof weather.getUvIndex());
  if (weather.getUvIndex() >= 1 && weather.getUvIndex() <= 2) {
    uvIndex.textContent = `${weather.getUvIndex()} | Low`;
  } else if (weather.getUvIndex() >= 3 && weather.getUvIndex() <= 5) {
    uvIndex.textContent = `${weather.getUvIndex()} | Moderate`;
  } else if (weather.getUvIndex() >= 6 && weather.getUvIndex() <= 7) {
    uvIndex.textContent = `${weather.getUvIndex()} | High`;
  } else if (weather.getUvIndex() >= 8 && weather.getUvIndex() <= 10) {
    uvIndex.textContent = `${weather.getUvIndex()} | Very High`;
  } else if (weather.getUvIndex() >= 11) {
    uvIndex.textContent = `${weather.getUvIndex()} | Extreme`;
  } else {
    uvIndex.textContent = `${weather.getUvIndex()} | Unknown`;
  }
  wind.textContent = `${weather.getWind()}km/h`;

  // Change Background
  if (weather.getCondition().toString().toLowerCase().includes('sunny')) {
    weatherBackground.setAttribute('src', `media/sunny_${random}.mp4`);
    searchBtn.style.backgroundColor = '#f3ebe1';
    searchIcon.style.color = 'black';
  } else if (weather.getCondition().toString().toLowerCase().includes('cloud') || weather.getCondition().toString().toLowerCase().includes('overcast') || weather.getCondition().toString().toLowerCase().includes('mist') || weather.getCondition().toString().toLowerCase().includes('fog')) {
    weatherBackground.setAttribute('src', `media/cloudy_${random}.mp4`);
    searchBtn.style.backgroundColor = '#acafbc';
    searchIcon.style.color = 'black';
  } else if (weather.getCondition().toString().toLowerCase().includes('rain') || weather.getCondition().toString().toLowerCase().includes('sleet') || weather.getCondition().toString().toLowerCase().includes('drizzle') || weather.getCondition().toString().toLowerCase().includes('thundery') || weather.getCondition().toString().toLowerCase().includes('shower')) {
    weatherBackground.setAttribute('src', `media/rainy_${random}.mp4`);
    searchBtn.style.backgroundColor = '#63839d';
    searchIcon.style.color = 'black';
  } else if (weather.getCondition().toString().toLowerCase().includes('snow') || weather.getCondition().toString().toLowerCase().includes('blizzard') || weather.getCondition().toString().toLowerCase().includes('ice')) {
    weatherBackground.setAttribute('src', `media/snowy_${random}.mp4`);
    searchBtn.style.backgroundColor = 'whitesmoke';
    searchIcon.style.color = 'black';
  } else if (weather.getCondition().toString().toLowerCase().includes('clear')) {
    weatherBackground.setAttribute('src', `media/clear_${random}.mp4`);
    searchBtn.style.backgroundColor = 'transparent';
    searchIcon.style.color = '#989faa';
  }
}