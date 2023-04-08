"use strict";
// const startUserIcon = require("./startJs/startUserIcon.js");

function checkEmail() {
  const email = document.getElementById("inputLogMain").value;
  const user = JSON.parse(localStorage.getItem(email));
  if (user) {
    return true;
  } else {
    return false;
  }
}

function verifyEmail() {
  const emailInput = document.getElementById("inputLogMain");
  const emailStatus = document.getElementById("email-status");

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    if (email) {
      const emailExists = checkEmail(email);
      if (emailExists) {
        emailStatus.classList.remove("invalid");
        emailStatus.classList.add("valid");
        emailStatus.textContent = "Email found!";
        console.log("Email exists in localStorage.");
        
        setTimeout(() => {
          location.href = "../main/main.html";
        }, 1500);
      } else {
        emailStatus.classList.remove("valid");
        emailStatus.classList.add("invalid");
        emailStatus.textContent = "Email not found.";
        console.log("Email does not exist in localStorage.");
      }
    } else {
      emailStatus.classList.remove("valid");
      emailStatus.classList.remove("invalid");
      emailStatus.textContent = "";
    }
  });
}

module.exports = { verifyEmail };
