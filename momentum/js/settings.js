const settings = document.querySelector(".settings");
const settingsWindow = document.querySelector(".settings-window");
settings.addEventListener("click", () => {
    settingsWindow.classList.toggle('hidden');
})

const quote = document.querySelector(".quote");
const settingQuote = document.querySelector(".setting-quote");
const player = document.querySelector(".player");
const settingPlayer = document.querySelector(".setting-player");
const time = document.querySelector(".time");
const settingTime = document.querySelector(".setting-time");
const weather = document.querySelector(".weather");
const settingWeather = document.querySelector(".setting-weather");
const greeting = document.querySelector(".greeting-container");
const settingGreeting = document.querySelector(".setting-greeting");

settingQuote.addEventListener("click", function() {
    settingQuote.classList.toggle('setting-active');
    quote.classList.toggle('hidden');
})
settingPlayer.addEventListener("click", function() {
    settingPlayer.classList.toggle('setting-active');
    player.classList.toggle('hidden');
})
settingTime.addEventListener("click", function() {
    settingTime.classList.toggle('setting-active');
    time.classList.toggle('hidden');
})
settingWeather.addEventListener("click", function() {
    settingWeather.classList.toggle('setting-active');
    weather.classList.toggle('hidden');
})
settingGreeting.addEventListener("click", function() {
    settingGreeting.classList.toggle('setting-active');
    greeting.classList.toggle('hidden');
})