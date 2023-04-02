const fetchMovies = require('../js/loadInfo').fetchMovies;
const requests = require('../js/requests').requests;
fetchMovies(requests(1));


const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const myModal = document.getElementById("myModal");
  const modalMain = document.querySelector("main");
  myModal.classList.remove("hidden");
  myModal.classList.add("myModalMain");

  document.body.classList.add("blur");
  loginForm.style.visibility = "hidden";

  document.body.addEventListener("click", function (event) {
    if (event.target == modalMain) {
      myModal.style.display = "none";
      modalMain.style.visibility = "visible";
      document.body.classList.remove("blur");
      modalMain.style.filter = "none";
      loginForm.style.visibility = "visible";
    }
  });
  loginForm.addEventListener("click", function (event) {
    myModal.style.display = "block";
  });
});

function registerUser() {
  let username = document.querySelector('input[type="text"]').value;
  let email = document.querySelector('input[type="email"]').value;
  let password = document.querySelector('input[type="password"]').value;

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
}

function loginUser() {
  let email = document.getElementById("inputLog");
  let password = document.getElementById("inputPass");
  let userData = JSON.parse(localStorage.getItem(email.value), "userData");
  
  if (userData.email === email.value && userData.password === password.value) {
    console.log('Login successful. Welcome ' + userData.username + '!');
  startUserIcon();
  if (userData) {
    myModal.style.display = "none";
    const startBtn = document.getElementById("startBtn");
    startBtn.style.display = "block";
    let ready = document.querySelector(".ready");
    ready.textContent = "";
  }
  } else {
    console.log("Incorrect email or password. Please try again.");
  } 
  document.querySelector('input[type="email"]').value = "";
  document.querySelector('input[type="password"]').value = "";
}

function startUserIcon() {
  let email = document.getElementById("inputLog");
  let userData = JSON.parse(localStorage.getItem(email.value), "userData");

  const userIcon = document.createElement("img");
  userIcon.src = "./img/user-icon.png";
  userIcon.alt = "User Icon";
  userIcon.width = 33;
  userIcon.height = 33;
  userIcon.classList.add("userIcon");

  const usernameIcon = document.createElement("span");
  usernameIcon.textContent = userData.username + " " + userData.email;
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
    localStorage.removeItem(userData.email);
    location.reload();
  });

  const userDiv = document.querySelector(".user");
  userDiv.appendChild(userIcon);
  userDiv.appendChild(dropdown);
}



// export default username;
// export default userData;
// import { startUserIcon } from "./startUser.js";