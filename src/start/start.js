"use strict";
const requests = require('../js/mainJs/requests').requests;
const fetchMovies = require('../js/mainJs/loadInfo').fetchMovies;
fetchMovies(requests());

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
function showModal() {
  myModal.style.display = "block";
  myModal.classList.remove("hidden");
  myModal.classList.add("myModalMain");
  body.classList.add("blur");
  loginForm.style.visibility = "hidden";
  loginForm.addEventListener("click", function (event) {
      if (myModal.style.display === "none") {
        showModal();
      }
    });
}
function hideModal() {
  myModal.style.display = "none";
  modalMain.style.visibility = "visible";
  body.classList.remove("blur");
  modalMain.style.filter = "none";
  loginForm.style.visibility = "visible";
}

let usernameInput;
let emailInput;
let passwordInput;

function registerUser() {
  usernameInput = document.querySelector('input[type="text"]');
  emailInput = document.querySelector('input[type="email"]');
  passwordInput = document.querySelector('input[type="password"]');

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
  emailInput = document.getElementById("inputLog");
  passwordInput = document.getElementById("inputPass");
  const userData = JSON.parse(localStorage.getItem(emailInput.value));
  if (!userData || userData.password !== passwordInput.value) {
    console.log(passwordInput.value, "Invalid email or password.");
    return;
  }
  console.log(`Login successful. Welcome ${userData.email}!`);
  location.reload();
  localStorage.setItem("userLoggedIn", true);
  localStorage.setItem("loggedInUsername", userData.email);

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

function changePassword() {
  emailInput = document.getElementById("inputLog");
  console.log(emailInput.value);
  passwordInput = document.getElementById("inputPass");
  console.log(passwordInput.value);
  const userData = JSON.parse(localStorage.getItem(emailInput.value));
  if (!userData) {
    console.log(passwordInput.value, "User does not exist.");
    return;
  }
  document.querySelector(".btnPassword").classList.add("changed");
  const passwordChangedMsg = document.getElementById("passwordChanged");
  passwordChangedMsg.classList.remove("hidden");
  setTimeout(() => {
    passwordChangedMsg.classList.add("hidden");
  }, 3500);
  userData.password = passwordInput.value;
  localStorage.setItem(emailInput.value, JSON.stringify(userData));
  console.log(`Password for ${userData.email} has been updated.`);
  emailInput.value = "";
  passwordInput.value = "";
}

// mukola@gmail.com









// ______________
// window.onload = function () {
//   registerUser();
// };
// ______________



// export default username;
// export default userData;
// import { startUserIcon } from "./startUser.js";


// localStorage.clear();
// localStorage.removeItem('email');
// localStorage.removeItem('username');

