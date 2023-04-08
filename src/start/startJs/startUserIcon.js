"use strict";

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

module.exports = { startUserIcon };
