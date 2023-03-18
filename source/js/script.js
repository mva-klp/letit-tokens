// Управление попап меню в мобильной версии

const navPanel = document.querySelector('.page-header__nav');
const navToggle = document.querySelector('.page-header__toggle');

navPanel.classList.add('page-header__nav--closed');

navToggle.addEventListener('click', function() {
  if (navPanel.classList.contains('page-header__nav--closed')){
    navPanel.classList.remove('page-header__nav--closed');
    navPanel.classList.add('page-header__nav--opened');
  } else {
    navPanel.classList.remove('page-header__nav--opened');
    navPanel.classList.add('page-header__nav--closed');
  }
});

// Запуск анимации на страницах

const animations = document.querySelectorAll('.animation');

animations.forEach(function (item) {
  item.classList.add('animation--js');
});

const flower = lottie;
const kittie = lottie;

flower.loadAnimation({
  container: document.querySelector('.loyalty__animation--flower'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/flower.json' // the path to the animation json
});

kittie.loadAnimation({
  container: document.querySelector('.results__animation-kittie'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/kitten.json' // the path to the animation json
});

// Обработчик для блоков detailes (аккордеона)

const detailsElements = document.querySelectorAll("details");

function handleClickOnDetails() {
  let pageHeader = document.querySelector(".page-header");
  let pageMain = document.querySelector(".page-main");
  console.log('add class');

  if (pageHeader.classList.contains('page-header--fixed')){
    pageHeader.classList.remove('page-header--fixed');
  } else {
    pageHeader.classList.add('page-header--fixed');
  }

  if (pageMain.classList.contains('page-main--margin')){
    pageMain.classList.remove('page-main--margin');
  } else {
    pageMain.classList.add('page-main--margin');
  }
}

detailsElements.forEach(function (item) {
  item.classList.add('accordion__item--js');
  item.addEventListener("click", handleClickOnDetails);
});
