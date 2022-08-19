import * as images from "./images.js";
import * as date from "./time.js";
/* Show/Hide settings */
const settings = document.querySelector(".settings-button");
const settingsWindow = document.querySelector(".settings-window");
settings.addEventListener("click", () => {
  settingsWindow.classList.toggle("hidden");
});
let query;

const settingsExitBtn = document.querySelector(".settings-exit-button");
settingsExitBtn.addEventListener("click", () => {
  settingsWindow.classList.toggle("hidden");
});

export function setLocalSettings(settingsName, settingsValue) {
  localStorage.setItem(settingsName, settingsValue);
}
window.addEventListener("beforeunload", setLocalSettings);

export function getLocalSettings(settingsName) {
  let setting = localStorage.getItem(settingsName);
  if (setting) {
    return setting;
  }
}

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

tags.addEventListener("change", () => {
  if (tags.value.length == 0) {
    tags.value = "nature" + "," + date.times_of_day;
  }
  images.getImagesFromAPI(tags.value);
  setLocalSettings("tags", tags.value);
});

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
  images.getImagesFromGitHub(date.times_of_day);
});

photosUnsplash.addEventListener("click", () => {
  photosUnsplash.classList.add("option-active");
  photosGitHub.classList.remove("option-active");
  settingTags.classList.remove("hidden");
  if (getLocalSettings("tags") == null) {
    query = "nature" + "," + date.times_of_day;
  } else query = getLocalSettings("tags");
  tags.value = query;
  images.getImagesFromAPI(query);
  
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
  setLocalSettings("tags", tags.value);
}
export function useSettings() {
  if (getLocalSettings("quote") == "false") {
    settingQuote.classList.remove("option-active");
    quote.classList.add("hidden");
  }
  if (getLocalSettings("player") == "false") {
    settingPlayer.classList.remove("option-active");
    player.classList.add("hidden");
  }
  if (getLocalSettings("time") == "false") {
    settingTime.classList.remove("option-active");
    time.classList.add("hidden");
  }
  if (getLocalSettings("weather") == "false") {
    settingWeather.classList.remove("option-active");
    weather.classList.add("hidden");
  }
  if (getLocalSettings("greeting") == "false") {
    settingGreeting.classList.remove("option-active");
    greeting.classList.add("hidden");
  }
  if (getLocalSettings("photos") == "github") {
    images.getImagesFromGitHub(date.times_of_day);
    photosGitHub.classList.add("option-active");
    photosUnsplash.classList.remove("option-active");
    settingTags.classList.add("hidden");
  } else if (getLocalSettings("photos") == "unsplash") {
    if (getLocalSettings("tags") != null) {
      tags.value = getLocalSettings("tags");
      images.getImagesFromAPI(tags.value);
    }
    else images.getImagesFromAPI(date.times_of_day);
    photosUnsplash.classList.add("option-active");
    photosGitHub.classList.remove("option-active");
    settingTags.classList.remove("hidden");
  }
}
