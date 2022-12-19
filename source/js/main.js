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


//Toggle-menu

let toggleButton = document.querySelector('.header__toggle-button');
let toggleMenu = document.querySelector('.header__wrapper');

toggleMenu.classList.remove('header__wrapper--no-js');

toggleButton.addEventListener('click', () => {
  toggleMenu.classList.toggle('header__toggle-open');
});

//Google Map

let center = [59.93863506417266,30.323117499999945];

function init () {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 17
  });

  let placemark = new ymaps.Placemark([59.93863506417266,30.323117499999945], {}, {
    iconLayout: 'default#image',
		iconImageHref: 'img/svg/adress-mark-icon.svg',
		iconImageSize: [18, 22],
		iconImageOffset: [0, 0]
  });

  map.geoObjects.add(placemark);
}


ymaps.ready(init);
