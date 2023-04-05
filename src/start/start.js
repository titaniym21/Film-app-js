"use strict";
// const singInBtn = require('./startJs/modal.js');
// const singUpBtn = require('./startJs/modal.js');
// const container = require('./startJs/modal.js');
// const firstForm = require('./startJs/modal.js');

// const emailInput = require('./startJs/mailCheck.js');
// const emailStatus = require('./startJs/mailCheck.js');
// const containerInput = require('./startJs/mailCheck.js');



// MAIL CHECK
const emailInput = document.getElementById("inputLogMain");
const emailStatus = document.getElementById("email-status");
const containerInput = document.getElementById("containerInput");
// -------------------------0-------------------------
// MODAL
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

// START
const loginForm = document.getElementById("login-form");
const myModal = document.getElementById("myModal");
const modalMain = document.querySelector("main");
const startBtn = document.getElementById("startBtn");
startBtn.classList.toggle("hidden");
const body = document.body;

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  myModal.classList.remove("hidden");
  myModal.classList.add("myModalMain");

  body.classList.add("blur");
  loginForm.style.visibility = "hidden";
});

body.addEventListener("click", function (event) {
  if (event.target == modalMain) {
    myModal.style.display = "none";
    modalMain.style.visibility = "visible";
    body.classList.remove("blur");
    modalMain.style.filter = "none";
    loginForm.style.visibility = "visible";
  }
});

loginForm.addEventListener("click", function (event) {
  myModal.style.display = "block";
});

function registerUser() {
  let username = document.querySelector('input[type="text"]').value;
  let email = document.querySelector('input[type="email"]').value;
  let password = document.querySelector('input[type="password"]').value;

  if (localStorage.getItem(email)) {
    console.log(
      "User already exists. Please choose a different email address."
    );
    return;
  }
  let user = {
    username: username,
    email: email,
    password: password,
  };
  localStorage.setItem(email, JSON.stringify(user));

  document.querySelector('input[type="text"]').value = "";
  document.querySelector('input[type="email"]').value = "";
  document.querySelector('input[type="password"]').value = "";
  console.log("Registration successful.");
  container.classList.remove("right-panel-active");
}
function loginUser() {
  let email = document.getElementById("inputLog");
  let password = document.getElementById("inputPass");
  let userData = JSON.parse(localStorage.getItem(email.value), "userData");

  if (userData.email === email.value && userData.password === password.value) {
    console.log("Login successful. Welcome " + userData.username + "!");
    startUserIcon();
    location.reload();
    localStorage.setItem("userLoggedIn", true);
    localStorage.setItem("loggedInUsername", userData.username);

    if (userData) {
      myModal.style.display = "none";
      startBtn.classList.toggle("hidden");
      containerInput.classList.toggle("hidden");
      let ready = document.querySelector(".ready");
      ready.textContent = "";
    }
  }
  document.querySelector('input[type="email"]').value = "";
  document.querySelector('input[type="password"]').value = "";
}

function startUserIcon() {
  let isLoggedIn = localStorage.getItem("userLoggedIn");
  let loggedInUsername = localStorage.getItem("loggedInUsername");

  if (isLoggedIn && loggedInUsername) {
    const userIcon = document.createElement("img");
    userIcon.src = "./img/user-icon.png";
    userIcon.alt = "User Icon";
    userIcon.width = 33;
    userIcon.height = 33;
    userIcon.classList.add("userIcon");

    const usernameIcon = document.createElement("span");
    usernameIcon.textContent = loggedInUsername;
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");
    dropdown.appendChild(usernameIcon);

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    const div1 = document.createElement("div");
    div1.classList.add("dropdown-content");
    const profileLink = document.createElement("a");
    profileLink.href = "#";
    profileLink.textContent = "Settings";
    dropdownContent.appendChild(profileLink);
    dropdownContent.appendChild(div1);
    const div2 = document.createElement("div");
    const logoutLink = document.createElement("a");
    logoutLink.href = "#";
    logoutLink.textContent = "Log Out";
    dropdownContent.appendChild(div2);
    dropdownContent.appendChild(logoutLink);
    dropdown.appendChild(dropdownContent);
    logoutLink.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.removeItem("userLoggedIn");
      localStorage.removeItem("loggedInUsername");
      location.reload();
    });

    const userDiv = document.querySelector(".user");
    userDiv.appendChild(userIcon);
    userDiv.appendChild(dropdown);
  }
}

// SUCURITY
document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("userLoggedIn");
    let loggedInUsername = localStorage.getItem("loggedInUsername");
    startUserIcon();
    if (isLoggedIn && loggedInUsername) {
      console.log("Welcome back, " + loggedInUsername + "!");
      loginForm.classList.toggle("hidden");
      
      myModal.style.display = "none";
      startBtn.classList.toggle("hidden");
      containerInput.classList.toggle("hidden");
      let ready = document.querySelector(".ready");
      ready.textContent = "";
    }
  });

// MAIL CHECK
emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  const user = JSON.parse(localStorage.getItem(email));
  if (user) {
    emailStatus.classList.remove("invalid");
    emailStatus.classList.add("valid");
    emailStatus.textContent = "Email found!";
    console.log("Email exists in localStorage.");
    setTimeout(() => {
      location.href = "../main/main.html";
    }, 500);
  } else {
    emailStatus.classList.remove("valid");
    emailStatus.classList.add("invalid");
    emailStatus.textContent = "Email not found.";
    console.log("Email does not exist in localStorage.");
  }
});

// export default username;
// export default userData;
// import { startUserIcon } from "./startUser.js";







// window.onload = function () {
// };
