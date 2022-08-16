let api_key = "31d684265e015f314f22ee2fc134f99f";
let city = document.querySelector(".city");
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

export function setLocalCity() {
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalCity);

export function getLocalCity() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}
window.addEventListener("load", getLocalCity);

export async function getWeather() {
  let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  let promise = fetch(requestURL);
  let response = await fetch(requestURL);

  if (response.ok) {
    let json = await response.json();
    console.log(json);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }
  else {
    alert("Ошибка HTTP: "+ response.status);
  }
}
