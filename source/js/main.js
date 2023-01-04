import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)


// Toggle-menu

const header = document.querySelector('.header__wrapper');
const menu = document.querySelector('.mobile-menu');
const pageBody = document.querySelector('.page-body');
let openButton = header.querySelector('.mobile-menu__button');
let toggleMenu = document.querySelector('.mobile-wrapper');
let closeButton = menu.querySelector('.mobile-menu__button');
let mobileMenuButton = document.querySelectorAll('.mobile-menu__link');

header.classList.remove('mobile-wrapper--no-js');
toggleMenu.classList.remove('mobile-wrapper--no-js');
toggleMenu.classList.add('visually-hidden');

openButton.addEventListener('click', () => {
  if(toggleMenu.classList.contains('visually-hidden')) {
    toggleMenu.classList.remove('visually-hidden');
    pageBody.classList.add('scroll-hidden');
  } else {
    toggleMenu.classList.add('visually-hidden');
    pageBody.classList.remove('scroll-hidden');
  }

});

closeButton.addEventListener('click', () => {
  if(toggleMenu.classList.contains('visually-hidden')) {
    toggleMenu.classList.remove('visually-hidden');
    pageBody.classList.add('scroll-hidden');
  } else {
    toggleMenu.classList.add('visually-hidden');
    pageBody.classList.remove('scroll-hidden');
  }
});

toggleMenu.addEventListener('click', (e) => {
  if(!e.target.closest('.mobile-menu')) {
    toggleMenu.classList.add('visually-hidden');
    pageBody.classList.remove('scroll-hidden');
  }
});

mobileMenuButton.forEach((e) => {
  e.addEventListener('click', () => {
    if(toggleMenu.classList.contains('visually-hidden')) {
      toggleMenu.classList.remove('visually-hidden');
      pageBody.classList.add('scroll-hidden');
    } else {
      toggleMenu.classList.add('visually-hidden');
      pageBody.classList.remove('scroll-hidden');
    }
  });
});


// Google Map

function init() {
  let map = new ymaps.Map('map', {
    center: [59.93863506417266, 30.323117499999945],
    zoom: 17,
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  let placemark = new ymaps.Placemark([59.93863506417266, 30.323117499999945], {}, {
    iconLayout: 'default#image', iconImageHref: 'img/svg/adress-mark-icon.svg', iconImageSize: [18, 22], iconImageOffset: [0, 0],
  });


  map.geoObjects.add(placemark);
}

ymaps.ready(init);
