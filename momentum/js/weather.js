let api_key = "31d684265e015f314f22ee2fc134f99f";
let city = document.querySelector(".city");
city.value = "Minsk";
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

export function setLocalCity() {
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalCity);

export function getLocalCity() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}

console.log("city.value = " + city.value);

export async function getWeather() {
  let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  console.log("requestURL:" + requestURL);
  let promise = fetch(requestURL);
  let response = await fetch(requestURL);

  if (response.ok) {
    let data = await response.json();
    console.log(data);
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`
  }
  else {
    console.log("Ошибка HTTP: "+ response.status);
  }
}

city.addEventListener("change", function () {
  getWeather();
});