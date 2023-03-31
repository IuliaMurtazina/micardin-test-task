import "./fonts/fonts.css";
import "./scss/style.scss";
import html from "./index.html";
import Swiper, { Pagination } from "swiper";

// TIMER
const startLogOutTimer = function () {
  const tick = function () {
    const hours = String(Math.trunc(time / 60 / 60)).padStart(2, 0);
    const minutes = String(Math.trunc(time / 60 - hours * 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2, 0);

    const hoursTens = document.querySelectorAll(".hours-tens");
    const hoursUnits = document.querySelectorAll(".hours-units");
    const minutesTens = document.querySelectorAll(".minutes-tens");
    const minutesUnits = document.querySelectorAll(".minutes-units");
    const secondsTens = document.querySelectorAll(".seconds-tens");
    const secondsUnits = document.querySelectorAll(".seconds-units");

    hoursTens.forEach((item) => (item.textContent = `${hours.slice(0, -1)}`));
    hoursUnits.forEach((item) => (item.textContent = `${hours.slice(1)}`));
    minutesTens.forEach(
      (item) => (item.textContent = `${minutes.slice(0, -1)}`)
    );
    minutesUnits.forEach((item) => (item.textContent = `${minutes.slice(1)}`));
    secondsTens.forEach(
      (item) => (item.textContent = `${seconds.slice(0, -1)}`)
    );
    secondsUnits.forEach((item) => (item.textContent = `${seconds.slice(1)}`));

    if (time === 0) {
      clearInterval(timer);
    }
    time--;
  };

  let time = 18000;

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

startLogOutTimer();

// SLIDER
Swiper.use([Pagination]);

const ingredientsSwiper = new Swiper(".ingredients-swiper", {
  loop: true,
  pagination: {
    el: ".ingredients__pagination",
    clickable: true,
  },
});

const reviewsSwiper = new Swiper(".reviews-swiper", {
  loop: true,
  spaceBetween: 40,
  pagination: {
    el: ".reviews__pagination",
    clickable: true,
  },
});
