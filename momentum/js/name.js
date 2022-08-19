const name = document.querySelector(".name");

export function setLocalStorageName() {
  localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorageName);

export function getLocalStorageName() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorageName);
