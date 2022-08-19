let img = [];
let currentItem = 0;
const body = document.querySelector("body");

export async function getImagesFromUnsplash(query) {
  let requestURL = `https://api.unsplash.com/photos/random?query=${query}&per_page=20&orientation=landscape&count=20&client_id=fBU0Qq5z7pFoZb6YO7cRR-NspAolMBShCpdsMFiiFRo`;
  let response = await fetch(requestURL);
  if (response.ok) {
    let json = await response.json();
    img[1] = new Image();
    img[1].src = json[0].urls.regular;
    img[1].onload = () => {
      body.style.backgroundImage = "url('" + img[1].src + "')" ;
    };
    for (let i = 2; i < 20; i++) {
      img[i] = new Image();
      console.log(i);
      img[i].src = json[i - 1].urls.regular;
    }
  } else {
    alert(
      "Количество запросов к API с картинками превыщено, попробуйте позже. Пока можете проверить остальную часть задания. Ошибка HTTP: " +
        response.status
    );
  }
}
function changeCurrentItem(n) {
 if (n > 20) { currentItem = 1; }
 else if (n < 1) { currentItem = 20; }
 else currentItem = n;
  body.style.backgroundImage = "url('" + img[currentItem].src + "')";
}
document.querySelector(".slide-prev").addEventListener("click", function (e) {
  changeCurrentItem(currentItem - 1);
});
document.querySelector(".slide-next").addEventListener("click", function () {
  changeCurrentItem(currentItem + 1);
});
function randomInteger(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}
export async function getImagesFromGitHub(time_of_day) {
  let URL = `https://raw.githubusercontent.com/anisimova-elena/stage1-tasks/assets/images/${time_of_day}/`;
  let requestURL;
  let response;
  let k = randomInteger(1, 20);
  for (let i = 1; i < 20; i++) {
    requestURL = URL + i.toString().padStart(2, "0") + ".jpg";
    response = await fetch(requestURL);
    if (response.ok) {
      img[i] = new Image();
      img[i].src = requestURL;
      if (i == k) {
        img[i].onload = () => {
          body.style.backgroundImage = "url('" + img[i].src + "')" ;
        };
      }
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
}
export async function getImagesFromFlickr(query) {
  let source;
  let requestURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4d271a3b13b64b57a0d89080772327fb&tags=${query}&tag_mode=all&content_type=1&media=photos&accuracy=1&format=json&nojsoncallback=1`;
  let response = await fetch(requestURL);
  if (response.ok) {
    let json = await response.json();
    img[1] = new Image();
    source = `https://live.staticflickr.com/${json.photos.photo[0].server}/${json.photos.photo[0].id}_${json.photos.photo[0].secret}_b.jpg`
    img[1].src = source;
    img[1].onload = () => {
      body.style.backgroundImage = "url('" + img[1].src + "')" ;
    };
    for (let i = 2; i < 21; i++) {
      img[i] = new Image();
      source = `https://live.staticflickr.com/${json.photos.photo[i - 1].server}/${json.photos.photo[i - 1].id}_${json.photos.photo[i - 1].secret}_b.jpg`
      img[i].src = source;
    }
  } else {
    alert(
      "Количество запросов к API с картинками превыщено, попробуйте позже. Пока можете проверить остальную часть задания. Ошибка HTTP: " +
        response.status
    );
  }
}