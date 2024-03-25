"use strict";

const themeBtn = document.querySelector(".theme-btn");
const body = document.querySelector("body");
const themes = ["theme1", "theme2", "theme3", "theme4"];

themeBtn.addEventListener("click", () => {
  themes.every((t, i) => {
    if (body.classList.value === t) {
      i === themes.length - 1
        ? body.classList.replace(t, themes[0])
        : body.classList.replace(t, themes[i + 1]);
      return false;
    }
    return true;
  });
});
