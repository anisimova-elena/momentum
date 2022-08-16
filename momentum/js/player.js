import playList from './playList.js';
const audio = new Audio("../assets/sounds/Aqua Caelestis.mp3");
const playerButton = document.querySelector(".play-button");
const playNext = document.querySelector(".play-next");
const playPrev = document.querySelector(".play-prev");


let playListContainer = document.querySelector(".play-list");
playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    playListContainer.append(li);
    li.textContent = el.title;
    
  })
  const playItems = document.querySelectorAll(".play-item");
let playNum = 0;
let isPlay = false;
function player(src) {
    if (isPlay) {
        pauseAudio(src);
      } else {
        playAudio(src);
      }
}
playerButton.addEventListener("click", function (e) {
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
});
playNext.addEventListener("click", function (e) { 
    playItems[playNum].classList.remove("item-active");
    playNum = (playNum + 1 + playList.length) % playList.length;
    playAudio(playList[playNum].src);
})
playPrev.addEventListener("click", function (e) {
    playItems[playNum].classList.remove("item-active");
    playNum = (playNum - 1 + playList.length) % playList.length; 
    playAudio(playList[playNum].src);
})
function playAudio(src = "") { if (src != "") {
        audio.src = src;
    }
  audio.play();
  playerButton.classList.remove("play");
  playerButton.classList.add("pause");
  isPlay = true;
  playItems[playNum].classList.add("item-active");
}
function pauseAudio() {
  audio.pause();
  playerButton.classList.remove("pause");
  playerButton.classList.add("play");
  playItems[playNum].classList.remove("item-active");
  isPlay = false;
}

audio.onended = function() {
    playItems[playNum].classList.remove("item-active");
    playNum = (playNum + 1 + playList.length) % playList.length;
    playAudio(playList[playNum].src);
};