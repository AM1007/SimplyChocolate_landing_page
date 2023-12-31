import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.swiper', {
  modules: [Pagination],

  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 19,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
