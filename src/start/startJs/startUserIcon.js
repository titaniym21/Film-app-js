"use strict";

function startUserIcon() {
  let isLoggedIn = localStorage.getItem("userLoggedIn");
  let loggedInUsername = localStorage.getItem("loggedInUsername");
  let isUserIn = localStorage.getItem("username");

  if (isLoggedIn && loggedInUsername) {
    const userIcon = document.createElement("img");
    userIcon.src = "../start/img/user-icon.png";
    userIcon.alt = "User Icon";
    userIcon.width = 33;
    userIcon.height = 33;
    userIcon.classList.add("userIcon");
    const usernameIcon = document.createElement("span");
    usernameIcon.textContent = isUserIn;
    usernameIcon.querySelector('nameUser');
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");
    dropdown.appendChild(usernameIcon);

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    
    const div2 = document.createElement("div");
    const logoutLink = document.createElement("a");
    logoutLink.href = "#";
    logoutLink.textContent = "Log Out";
    dropdownContent.appendChild(div2);
    dropdownContent.appendChild(logoutLink);
    dropdown.appendChild(dropdownContent);
    logoutLink.addEventListener("click", function (event) {
        logoutLink.href = "../start/start.html";
      localStorage.removeItem("userLoggedIn");
      localStorage.removeItem("loggedInUsername");
      setTimeout(() => {
        location.reload();
      }, 100);
    });

    const userDiv = document.querySelector(".user");
    userDiv.appendChild(userIcon);
    userDiv.appendChild(dropdown);
  }
}

module.exports = { startUserIcon };
