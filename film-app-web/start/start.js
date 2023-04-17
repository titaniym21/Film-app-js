import { requests } from '../js/mainJs/requests.js';
import { fetchMovies } from '../js/mainJs/loadInfo.js';
fetchMovies(requests());
import { verifyEmail } from './startJs/chekEmail.js';
verifyEmail();
import { initAuthentication } from './startJs/modal.js';
initAuthentication();
import { startUserIcon } from './startJs/startUserIcon.js';
startUserIcon();
import { checkLoginStatus } from './startJs/login.js';



const loginForm = document.getElementById("login-form");
const myModal = document.getElementById("myModal");
const modalMain = document.querySelector("main");
const containerInput = document.getElementById("containerInput");
const startBtn = document.getElementById("startBtn");
const body = document.body;

startBtn.classList.toggle("hidden");

document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus(loginForm, startBtn);
});



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
  loginForm.classList.add("hidden");
  containerInput.classList.add("hidden");
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
  loginForm.classList.remove("hidden");
  containerInput.classList.remove("hidden");
}

let usernameInput;
let emailInput;
let passwordInput;

const registerUserBtn = document.getElementById("registerUserBtn");
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

registerUserBtn.addEventListener("click", function (event) {
  event.preventDefault();
  registerUser();
});

const loginUserBtn = document.getElementById("loginUserBtn");

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
  localStorage.setItem("username", userData.username);

  myModal.style.display = "none";
  startBtn.classList.toggle("hidden");
  containerInput.classList.toggle("hidden");
  document.querySelector(".ready").textContent = "";

  emailInput.value = "";
  passwordInput.value = "";
}

loginUserBtn.addEventListener("click", function (event) {
  event.preventDefault();
  loginUser();
});

function togglePanel() {
  const container = document.querySelector(".container");
  container.classList.toggle("right-panel-active");
}

const resetPasswordBtn = document.getElementById("resetPasswordBtn");

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

resetPasswordBtn.addEventListener("click", function (event) {
  event.preventDefault();
  changePassword();
});

const goToMainPage = document.getElementById("goToMainPage");

goToMainPage.addEventListener("click", function (event) {
  event.preventDefault();
  startBtn.removeEventListener("click", function (event) {});
  loginForm.removeEventListener("submit", function (event) {});
  body.removeEventListener("click", function (event) {});
  registerUserBtn.removeEventListener("click", function (event) {});
  loginForm.removeEventListener("click", function (event) {});
  resetPasswordBtn.removeEventListener("click", function (event) {});
  window.location.href = "../main/main.html";
});




