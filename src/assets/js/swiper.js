import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const option1 = {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const option2 = {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export const swiper = () => {
  const swiper1 = new Swiper(".js-swiper1", option1);
  const swiper2 = new Swiper(".js-swiper2", option2);
};