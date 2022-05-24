var swiper = new Swiper(".reviews-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".footer-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    420: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
