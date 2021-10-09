"use strict";
// ローディング画面
window.onload = function () {
  setTimeout(() => {
    const loading = document.querySelector(".loader");

    loading.classList.add("hidden");
  }, 3000);
};
onload();

//ハンバーガーメニュー
const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile_menu");
hamburger.addEventListener("click", () => {
  mobileOpen();
});
mobile.addEventListener("click", () => {
  mobileOpen();
});
const mobileOpen = function () {
  hamburger.classList.toggle("menu-open");
  mobile.classList.toggle("menu-open");
};

//納品事例
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const ul = document.querySelector(".works_ul");
const slides = ul.children;
const dots = [];
const artBtn = document.querySelector(".art_btn");

let currentIndex = 0;
next.addEventListener("click", () => {
  currentIndex++;
  moveSlides();
  btnUpDate();
  upDots();
});
prev.addEventListener("click", () => {
  currentIndex--;
  moveSlides();
  btnUpDate();
  upDots();
});
const moveSlides = function () {
  const slideWidth = slides[0].getBoundingClientRect().width;
  ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
};
const btnUpDate = function () {
  if (currentIndex === 0) {
    prev.classList.add("hidden");
  } else {
    prev.classList.remove("hidden");
  }
  if (currentIndex === slides.length - 1) {
    next.classList.add("hidden");
  } else {
    next.classList.remove("hidden");
  }
};
btnUpDate();

const interval = function () {
  setInterval(() => {
    currentIndex++;
    if (currentIndex  === slides.length) {
      currentIndex = 0;
    }
    moveSlides();
    btnUpDate();
    upDots();
  }, 6000);
};
interval();

window.addEventListener("resize", () => {
  moveSlides();
});

for (let i = 0; i <= slides.length - 1; i++) {
  const button = document.createElement("button");
  dots.push(button);
  artBtn.appendChild(button);
  button.addEventListener("click", () => {
    currentIndex = i;
    moveSlides();
    btnUpDate();
    upDots();
  });
}


dots[0].classList.add("current");


const upDots = function () {
  dots.forEach(function (dot) {
    dot.classList.remove("current");
  });
  dots[currentIndex].classList.add('current');

  
};


