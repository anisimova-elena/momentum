//const name = document.querySelector(".name");
let images = [];
let currentItem = 0;

export async function getImagesFromAPI(times_of_day) {
  let query = "nature" + "%20" + times_of_day;
  let requestURL = `https://api.unsplash.com/photos/random?query=${query}&per_page=20&orientation=landscape&count=20&client_id=fBU0Qq5z7pFoZb6YO7cRR-NspAolMBShCpdsMFiiFRo`;
  let promise = fetch(requestURL);
  let response = await fetch(requestURL);

  if (response.ok) {
    let json = await response.json();
    console.log(json);
    for (let i in json) {
      images.push(json[i].urls.full);
    }
    for (let i in images) {
        const img = new Image();
        img.src = images[i];
    }
    changeCurrentItem(0);  
  } else {
    alert("Количество запросов к API с картинками превыщено, попробуйте позже. Пока можете проверить остальную часть задания. Ошибка HTTP: "+ response.status);
  }
}
function changeCurrentItem(n) {
  console.log("Background - item");
  console.log(currentItem);
  currentItem = (n + 20) % 20;
  document.body.style.background =
    "url('" + images[currentItem] + "') center / cover";
}
document.querySelector(".slide-prev").addEventListener("click", function (e) {
  changeCurrentItem(currentItem - 1);
  e.classList.add('slide-active');
  //setTimeout(e.classList.remove('slide-active'), 10000) ;
});
document.querySelector(".slide-next").addEventListener("click", function () {
  changeCurrentItem(currentItem + 1);
});
