let writeUsBtn = document.querySelector('.write-us');
let popup = document.querySelector('.modal-login');
let close = popup.querySelector('.close-login');
let form = popup.querySelector('.login-form');
let login = form.querySelector('[name=login]');
let email = form.querySelector('[name=email]');
let letter = form.querySelector('[name=letter]');
let mapLink = document.querySelector('.map-img');
let mapPopup = document.querySelector('.modal-map');
let mapClose = document.querySelector('.map-close');
let offerBtns = document.querySelectorAll('.offer');
let deliveryContent = document.querySelectorAll('.delivery-content');

writeUsBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  popup.classList.add('modal-close');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-close');
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
  mapPopup.classList.add('modal-close');
});

for (let i = 0; i < offerBtns.length; i++) {
  offerBtns[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.offer-active').classList.remove('offer-active');
    offerBtns[i].classList.add('offer-active');

    document
      .querySelector('.delivery-content-active')
      .classList.remove('delivery-content-active');
    deliveryContent[i].classList.add('delivery-content-active');
  });
}
