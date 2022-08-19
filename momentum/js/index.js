

import * as images from './images.js';
import * as date from './time.js';
import * as m from './k.js';
m.left();

date.showTime();
//images.getImagesFromAPI(query);
import * as name from './name.js';
import * as quotes from './getQuotes.js'
import * as player from './player.js';
import * as settings from './settings.js'

import * as weather from './weather.js';
weather.getLocalCity();
weather.getWeather();
quotes.getQuotes();



window.addEventListener("beforeunload", settings.saveSettings);
window.addEventListener("load", settings.useSettings);