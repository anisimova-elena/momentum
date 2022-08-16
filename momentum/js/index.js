import * as date from './time.js';
import * as name from './name.js';
import * as images from './images.js';
date.showTime();
window.addEventListener("load", images.getImagesFromAPI(date.times_of_day));
//images.getImagesFromAPI();

