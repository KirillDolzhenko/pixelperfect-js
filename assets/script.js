"use strict";

const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

close.addEventListener("click", () => {
  sidebar.classList.remove("active");
  console.log("FFFF");
});

burger.addEventListener("click", () => {
  sidebar.classList.add("active");
});
