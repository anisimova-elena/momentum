import * as date from './time.js';
import * as name from './name.js';
import * as images from './images.js';
import * as weather from './weather.js';
date.showTime();
window.addEventListener("load", images.getImagesFromAPI(date.times_of_day));
weather.getWeather();
//images.getImagesFromAPI();

