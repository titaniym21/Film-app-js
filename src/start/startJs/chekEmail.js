"use strict";

function checkEmail() {
  const email = document.getElementById("inputLogMain").value;
  const user = JSON.parse(localStorage.getItem(email));
  if (user) {
    localStorage.setItem("userLoggedIn", true);
    localStorage.setItem("loggedInUsername", email);
    location.reload();
  } else {
    const emailStatus = document.getElementById("email-status");
    emailStatus.classList.remove("valid");
    emailStatus.classList.add("invalid");
    emailStatus.textContent = "Email not found.";
    console.log("Email does not exist in localStorage.");
  }
}

function verifyEmail() {
  const emailInput = document.getElementById("inputLogMain");
  const emailStatus = document.getElementById("email-status");

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    if (email) {
      checkEmail(email);
    } else {
      emailStatus.classList.remove("valid");
      emailStatus.classList.remove("invalid");
      emailStatus.textContent = "";
    }
  });
}

module.exports = { verifyEmail };
