/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.explore__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.explore__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			autoHeight: true,
			speed: 800,
			spaceBetween: 24,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.explore__arrow--prev',
				nextEl: '.explore__arrow--next',
			},

			// Брейкпоінти
			breakpoints: {
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 24,
				},
				630: {
					slidesPerView: 2,
					centeredSlides: false,
					spaceBetween: 24,
				},
				467: {
					slidesPerView: 1.5,
					centeredSlides: true,
					spaceBetween: 16,
				},
				0: {
					slidesPerView: 1.2,
					centeredSlides: true,
					spaceBetween: 16,
				}
			},

			// Події
			on: {

			}
		});
		new Swiper('.travel__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			autoHeight: true,
			speed: 800,
			spaceBetween: 24,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Брейкпоінти
			breakpoints: {
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 24,
				},
				630: {
					slidesPerView: 2,
					centeredSlides: false,
					spaceBetween: 24,
				},
				467: {
					slidesPerView: 1.5,
					centeredSlides: true,
					spaceBetween: 16,
				},
				0: {
					slidesPerView: 1.2,
					centeredSlides: true,
					spaceBetween: 16,
				}
			},

			// Події
			on: {

			}
		});
		new Swiper('.reviews__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			// autoHeight: true,
			speed: 800,
			spaceBetween: 24,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			centeredSlides: true,
			// Ефекти
			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Брейкпоінти
			breakpoints: {
				992: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 24,
				},
				630: {
					slidesPerView: 2,
					centeredSlides: false,
					spaceBetween: 24,
				},
				467: {
					slidesPerView: 1.5,
					centeredSlides: true,
					spaceBetween: 16,
				},
				0: {
					slidesPerView: 1.2,
					centeredSlides: true,
					spaceBetween: 16,
				}
			},

			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});