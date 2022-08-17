//const name = document.querySelector(".name");
let images = [];
let currentItem = 0;
const body = document.querySelector("body");

export async function getImagesFromAPI(times_of_day) {
  let query = "nature" + "%20" + times_of_day;
  let requestURL = `https://api.unsplash.com/photos/random?query=${query}&per_page=20&orientation=landscape&count=20&client_id=fBU0Qq5z7pFoZb6YO7cRR-NspAolMBShCpdsMFiiFRo`;
  let promise = fetch(requestURL);
  let response = await fetch(requestURL);

  if (response.ok) {
    let json = await response.json();
    for (let i in json) {
      images.push(json[i].urls.full);
    }
    const img = new Image();
    img.src =  images[0]// здесь ваш код 
    img.onload = () => { body.style.backgroundImage = images[0]; }
    for (let i = 1; i < 20; i++) {
        const img = new Image();
        img.src = images[i];
    }
    changeCurrentItem(0);  
  } else {
    alert("Количество запросов к API с картинками превыщено, попробуйте позже. Пока можете проверить остальную часть задания. Ошибка HTTP: "+ response.status);
  }
}
function changeCurrentItem(n) {
  currentItem = (n + 20) % 20;
  document.body.style.background =
    "url('" + images[currentItem] + "') center / cover";
}
document.querySelector(".slide-prev").addEventListener("click", function (e) {
  changeCurrentItem(currentItem - 1);
  e.classList.add('slide-active');
});
document.querySelector(".slide-next").addEventListener("click", function () {
  changeCurrentItem(currentItem + 1);
});
