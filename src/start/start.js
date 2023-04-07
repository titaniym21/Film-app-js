"use strict";

const { verifyEmail } = require("./startJs/chekEmail.js");
verifyEmail();

const { initAuthentication } = require("./startJs/modal.js");
initAuthentication();

const { startUserIcon } = require("./startJs/startUserIcon.js");
startUserIcon();

const { checkLoginStatus } = require("./startJs/login.js");

document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
});

const loginForm = document.getElementById("login-form");
const myModal = document.getElementById("myModal");
const modalMain = document.querySelector("main");
const containerInput = document.getElementById("containerInput");
const startBtn = document.getElementById("startBtn");
const body = document.body;

startBtn.classList.toggle("hidden");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  showModal();
});

body.addEventListener("click", function (event) {
  if (event.target === modalMain) {
    hideModal();
  }
});

loginForm.addEventListener("click", function (event) {
  if (myModal.style.display === "none") {
    showModal();
  }
});

function showModal() {
  myModal.classList.remove("hidden");
  myModal.classList.add("myModalMain");
  body.classList.add("blur");
  loginForm.style.visibility = "hidden";
}

function hideModal() {
  myModal.style.display = "none";
  modalMain.style.visibility = "visible";
  body.classList.remove("blur");
  modalMain.style.filter = "none";
  loginForm.style.visibility = "visible";
}

function registerUser() {
  const usernameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  if (localStorage.getItem(emailInput.value)) {
    console.log(
      "User already exists. Please choose a different email address."
    );
    return;
  }
  const user = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  localStorage.setItem(emailInput.value, JSON.stringify(user));
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  console.log("Registration successful.");
  togglePanel();
}

function loginUser() {
  const emailInput = document.getElementById("inputLog");
  const passwordInput = document.getElementById("inputPass");
  const userData = JSON.parse(localStorage.getItem(emailInput.value));

  if (!userData || userData.password !== passwordInput.value) {
    console.log("Invalid email or password.");
    return;
  }
  console.log(`Login successful. Welcome ${userData.username}!`);
  startUserIcon();
  location.reload();
  localStorage.setItem("userLoggedIn", true);
  localStorage.setItem("loggedInUsername", userData.username);

  myModal.style.display = "none";
  startBtn.classList.toggle("hidden");
  containerInput.classList.toggle("hidden");
  document.querySelector(".ready").textContent = "";

  emailInput.value = "";
  passwordInput.value = "";
}
function togglePanel() {
  const container = document.querySelector(".container");
  container.classList.toggle("right-panel-active");
}


// window.onload = function () {
//   registerUser();
// };

// export default username;
// export default userData;
// import { startUserIcon } from "./startUser.js";


// localStorage.clear();
// localStorage.removeItem('email');

