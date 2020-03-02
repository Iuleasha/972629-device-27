let link = document.querySelector(".write-us");
let popup = document.querySelector(".modal-login");
let close = popup.querySelector(".close-login");
let form = popup.querySelector(".login-form");
let login = form.querySelector("[name=login]");
let email = form.querySelector("[name=email]");
let letter = form.querySelector("[name=letter]");
let isStorageSupport = true;
let storage = "";
let mapLink = document.querySelector(".map-img");
let mapPopup = document.querySelector(".modal-map");
let mapClose = document.querySelector(".map-close");

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
