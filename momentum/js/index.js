
import * as settings from './settings.js'
import * as images from './images.js';
import * as date from './time.js';

date.showTime();
//images.getImagesFromAPI(query);
import * as name from './name.js';
import * as quotes from './getQuotes.js'
import * as player from './player.js';


import * as weather from './weather.js';
weather.getLocalCity();
weather.getWeather();
quotes.getQuotes();



window.addEventListener("unload", settings.saveSettings)
window.addEventListener("load", settings.useSettings)