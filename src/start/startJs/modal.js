"use strict";

function initAuthentication() {
  const singInBtn = document.getElementById("singIn");
  const singUpBtn = document.getElementById("singUp");
  const firstForm = document.getElementById("form1");
  const secondForm = document.getElementById("form2");
  const container = document.querySelector(".container");

  singInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
  singUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });
  firstForm.addEventListener("submit", (e) => e.preventDefault());
  secondForm.addEventListener("submit", (e) => e.preventDefault());
}

module.exports = { initAuthentication };

