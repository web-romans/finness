import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

const interviewSlider = document.querySelectorAll("[data-interview-slider]");
const bonusSlider = document.querySelectorAll("[data-bonus-slider]");
const reviewSlider = document.querySelectorAll("[data-review-slider]");

if (interviewSlider) {
  interviewSlider.forEach((el) => {
    const slides = el.querySelectorAll(".swiper-slide");
    const nextBtn = el.querySelectorAll("[data-interview-next]");
    const lastBtn = el.querySelector("[data-interview-last]");
    const paginationBl = el.parentNode.querySelector("[data-interview-progress]");
    if (slides.length > 1) {
      const swiper = new Swiper(el, {
        modules: [Navigation, Pagination, EffectFade],
        effect: 'fade',
        allowTouchMove: false,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: paginationBl,
          type: "progressbar"
        },
        on: {
          init: function (swiper) {
            const sliders = el.querySelectorAll('.swiper-slide');
            const curNum = el.parentNode.querySelector("[data-interview-cur]");
            const sizeNum = el.parentNode.querySelector("[data-interview-all]");
            const header = el.parentNode.querySelector('.interview__header');
            if (sizeNum) sizeNum.innerHTML = sliders.length - 1;
            if (curNum) curNum.innerHTML = swiper.activeIndex + 1;
            if (nextBtn) {
              nextBtn.forEach(btn => {
                btn.addEventListener("click", (e) => {
                  e.preventDefault();

                  swiper.slideNext();
                  curNum.innerHTML = swiper.activeIndex + 1;
                  if (swiper.activeIndex == (sliders.length - 1)) {
                    header.classList.add('hide');
                  }
                });
              })
            }
            if (lastBtn) {
              lastBtn.addEventListener("click", (e) => {
                e.preventDefault();
                swiper.slideTo(0);
                if (curNum) curNum.innerHTML = swiper.activeIndex + 1;
                header.classList.remove('hide');
              });
            }
          },
        },
      });
    }
  });
}

if (bonusSlider) {
  bonusSlider.forEach((el) => {
    const slides = el.querySelectorAll(".swiper-slide");
    const prevBtn = el.parentNode.querySelector(".slider-arrow--prev");
    const nextBtn = el.parentNode.querySelector(".slider-arrow--next");

    if (slides.length > 2) {
      const swiper = new Swiper(el, {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1110: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
        on: {
          init: function (swiper) {
            if (prevBtn) {
              prevBtn.addEventListener("click", (e) => {
                e.preventDefault();
                swiper.slidePrev();
              });
            }

            if (nextBtn) {
              nextBtn.addEventListener("click", (e) => {
                e.preventDefault();
                swiper.slideNext();
              });
            }
          },
        },
      });
    } else {
      if (prevBtn) {
        prevBtn.classList.add("slider-arrow--hide");
      }
      if (nextBtn) {
        nextBtn.classList.add("slider-arrow--hide");
      }
    }
  });
}

if (reviewSlider) {
  reviewSlider.forEach((el) => {
    const slides = el.querySelectorAll(".swiper-slide");
    const prevBtn = el.parentNode.parentNode.querySelector(".slide-arrow--prev");
    const nextBtn = el.parentNode.parentNode.querySelector(".slide-arrow--next");

    if (slides.length > 3) {
      const swiper = new Swiper(el, {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1110: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
        on: {
          init: function (swiper) {

            if (prevBtn) {
              prevBtn.addEventListener("click", (e) => {
                e.preventDefault();
                swiper.slidePrev();
              });
            }

            if (nextBtn) {
              nextBtn.addEventListener("click", (e) => {
                e.preventDefault();
                swiper.slideNext();
              });
            }
          },
        },
      });
    } else {
      if (slides) {
        slides.forEach(slide => {
          slide.classList.add("no-swiper")
        })
      }
      if (prevBtn) {
        prevBtn.classList.add("slide-arrow--hide");
      }
      if (nextBtn) {
        nextBtn.classList.add("slide-arrow--hide");
      }
    }
  });
}

