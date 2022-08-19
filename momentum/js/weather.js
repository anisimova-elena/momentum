let api_key = "31d684265e015f314f22ee2fc134f99f";
let city = document.querySelector(".city");
city.value = "Minsk";
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

export function setLocalCity() {
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalCity);

export function getLocalCity() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
  else { city.value = "Minsk";
    localStorage.setItem("city", "Minsk");
  }
}


export async function getWeather() {
  let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  let promise = fetch(requestURL);
  let response = await fetch(requestURL);

  if (response.ok) {
    let data = await response.json();
    weatherError.textContent = "";
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.ceil(data.main.humidity)}%`
  }
  else {
    weatherError.textContent = "City not found";
    weatherIcon.classList.remove('weather-icon owf');
    temperature.textContent = " ";
    weatherDescription.textContent = " ";
    wind.textContent = " ";
    humidity.textContent = " ";
    console.log("Ошибка HTTP: "+ response.status);
  }
}

city.addEventListener("change", function () {
  getWeather();
});