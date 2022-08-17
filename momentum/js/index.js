
import * as settings from './settings.js'
import * as images from './images.js';
import * as date from './time.js';

date.showTime();
images.getImagesFromAPI(date.times_of_day);
import * as name from './name.js';
import * as quotes from './getQuotes.js'
import * as player from './player.js';


import * as weather from './weather.js';
weather.getLocalCity();
weather.getWeather();
quotes.getQuotes();
