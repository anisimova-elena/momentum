import * as date from './time.js';
import * as name from './name.js';
import * as images from './images.js';
import * as player from './player.js';
import * as quotes from './getQuotes.js';
date.showTime();
images.getImagesFromAPI(date.times_of_day);



import * as weather from './weather.js';
weather.getLocalCity();
weather.getWeather();
quotes.getQuotes();
