import * as images from "./images.js";
import * as date_time from "./time.js";
//import * as m from './k.js';
//m.left();
//console.log("meme = ", m.meme);
date_time.showTime();

export function setLocalSettings(settingsName, settingsValue) {
  localStorage.setItem(settingsName, settingsValue);
}
console.log("date_time.times_of_day = ", date_time.times_of_day);
let queryTags = "nature" + "," + date_time.times_of_day;

export function getLocalSettings(settingsName) {
  let setting = localStorage.getItem(settingsName);
  if (setting) {
    return setting;
  }
}

/* Show/Hide settings-window */
const settings = document.querySelector(".settings-button");
const settingsWindow = document.querySelector(".settings-window");

settings.addEventListener("click", () => {
  settingsWindow.classList.toggle("hidden");
});

const settingsExitBtn = document.querySelector(".settings-exit-button");
settingsExitBtn.addEventListener("click", () => {
  settingsWindow.classList.toggle("hidden");
});


/*Show/Hide settings section */
let settingsSection = "interface";

function hideSettingsSection(option) {
  switch (settingsSection) {
    case "interface": {
      settingsInterface.classList.remove("setting-nav-active");
      settingsSectionInterface.classList.remove("setting-section-active");
      break;
    }
    case "backgrounds": {
      settingsBackground.classList.remove("setting-nav-active");
      settingsSectionBackground.classList.remove("setting-section-active");
      break;
    }
  }
}

/* Navigation buttons */
const settingsBackground = document.querySelector(".setting-background");
const settingsInterface = document.querySelector(".setting-interface");

/*Section of navigation */
const settingsSectionInterface = document.querySelector(
  ".settings-section-interface"
);
const settingsSectionBackground = document.querySelector(
  ".settings-section-backgrounds"
);

settingsBackground.addEventListener("click", () => {
  hideSettingsSection(settingsSection);
  settingsSection = "backgrounds";
  settingsBackground.classList.add("setting-nav-active");
  settingsSectionBackground.classList.add("setting-section-active");
});
settingsInterface.addEventListener("click", () => {
  hideSettingsSection(settingsSection);
  settingsSection = "interface";
  settingsInterface.classList.add("setting-nav-active");
  settingsSectionInterface.classList.add("setting-section-active");
});
const tags = document.querySelector(".input-tags");


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
const photosGitHub = document.querySelector(".git-hub_photos");
const photosUnsplash = document.querySelector(".unsplash_photos");
const settingTags = document.querySelector(".setting-tags");
const photosFlickr = document.querySelector(".flickr_photos ");

settingQuote.addEventListener("click", function () {
  settingQuote.classList.toggle("option-active");
  quote.classList.toggle("hidden");
});
settingPlayer.addEventListener("click", function () {
  settingPlayer.classList.toggle("option-active");
  player.classList.toggle("hidden");
  setLocalSettings("player", "false");
});
settingTime.addEventListener("click", function () {
  settingTime.classList.toggle("option-active");
  time.classList.toggle("hidden");
});
settingWeather.addEventListener("click", function () {
  settingWeather.classList.toggle("option-active");
  weather.classList.toggle("hidden");
});
settingGreeting.addEventListener("click", function () {
  settingGreeting.classList.toggle("option-active");
  greeting.classList.toggle("hidden");
});

photosGitHub.addEventListener("click", () => {
  photosGitHub.classList.add("option-active");
  photosUnsplash.classList.remove("option-active");
  settingTags.classList.add("hidden");
  images.getImagesFromGitHub(date_time.times_of_day);
});

photosUnsplash.addEventListener("click", () => {
  photosUnsplash.classList.add("option-active");
  photosGitHub.classList.remove("option-active");
  photosFlickr.classList.remove("option-active");
  settingTags.classList.remove("hidden");
  images.getImagesFromUnsplash(queryTags);
});

photosFlickr.addEventListener("click", () => {
  photosFlickr.classList.add("option-active");  
  photosGitHub.classList.remove("option-active");
  photosUnsplash.classList.remove("option-active");
  settingTags.classList.remove("hidden");
  images.getImagesFromFlickr(queryTags);
});

tags.addEventListener("change", () => {
  if (tags.value.length == 0) { tags.value = queryTags = "nature" + "," + date_time.times_of_day; }
  else queryTags = tags.value;
});

export function saveSettings() {
  if (settingQuote.classList.contains("option-active")) {
    setLocalSettings("quote", "true");
  } else {
    setLocalSettings("quote", "false");
  }
  if (settingPlayer.classList.contains("option-active")) {
    setLocalSettings("player", "true");
  } else {
    setLocalSettings("player", "false");
  }
  if (settingTime.classList.contains("option-active")) {
    setLocalSettings("time", "true");
  } else {
    setLocalSettings("time", "false");
  }
  if (settingWeather.classList.contains("option-active")) {
    setLocalSettings("weather", "true");
  } else {
    setLocalSettings("weather", "false");
  }
  if (settingGreeting.classList.contains("option-active")) {
    setLocalSettings("greeting", "true");
  } else {
    setLocalSettings("greeting", "false");
  }
  if (photosGitHub.classList.contains("option-active")) {
    setLocalSettings("photos", "github");
  } else if (photosUnsplash.classList.contains("option-active")) {
    setLocalSettings("photos", "unsplash");
  }
  setLocalSettings("tags", queryTags);
}
export function useSettings() {
  if (localStorage.getItem("quote") == "false") {
    settingQuote.classList.remove("option-active");
    quote.classList.add("hidden");
  }
  if (localStorage.getItem("player") == "false") {
    settingPlayer.classList.remove("option-active");
    player.classList.add("hidden");
  }
  if (localStorage.getItem("time") == "false") {
    settingTime.classList.remove("option-active");
    time.classList.add("hidden");
  }
  if (localStorage.getItem("weather") == "false") {
    settingWeather.classList.remove("option-active");
    weather.classList.add("hidden");
  }
  if (localStorage.getItem("greeting") == "false") {
    settingGreeting.classList.remove("option-active");
    greeting.classList.add("hidden");
  }
  if (localStorage.getItem("tags") == null) {
    console.log("tags =  null");
    setLocalSettings("tags", "nature" + "," + date_time.times_of_day);
    tags.value ="nature" + "," + date_time.times_of_day;
  } else tags.value = getLocalSettings("tags");

  if (localStorage.getItem("photos") == "github" || localStorage.getItem("photos") == null) {
    images.getImagesFromGitHub(date_time.times_of_day);
    photosGitHub.classList.add("option-active");
    settingTags.classList.add("hidden");
  } else if (getLocalSettings("photos") == "unsplash") { 
          images.getImagesFromUnsplash(queryTags);
          photosUnsplash.classList.add("option-active");
        }
       else if (getLocalSettings("photos") == "flickr") {
          images.getImagesFromFlickr(queryTags);
          photosFlickr.classList.add("option-active");
          settingTags.classList.remove("hidden");
       }
}
