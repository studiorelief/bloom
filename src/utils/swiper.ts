import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperLogoLoop() {
  new Swiper('.swiper.is-logo-loop', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 48,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    speed: 2000,
  });
}

export function swiperReferal(): void {
  new Swiper('.swiper.is-referal', {
    direction: 'horizontal',
    grabCursor: true,
    loop: false,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 800,
    centeredSlides: true,
    slideActiveClass: 'is-active',
    speed: 1500,
    navigation: {
      nextEl: '.referal-c_button-next',
      prevEl: '.referal-c_button-previous',
    },
    on: {
      init: function () {
        updateNavigationVisibility(this);
      },
      slideChange: function () {
        updateNavigationVisibility(this);
      },
    },
  });

  function updateNavigationVisibility(swiper: Swiper): void {
    const { isBeginning, isEnd } = swiper;
    const prevButton: HTMLElement | null = document.querySelector('.referal-c_button-previous');
    const nextButton: HTMLElement | null = document.querySelector('.referal-c_button-next');
    if (prevButton) prevButton.style.display = isBeginning ? 'none' : 'block';
    if (nextButton) nextButton.style.display = isEnd ? 'none' : 'block';
  }
}
