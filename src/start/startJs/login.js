function checkLoginStatus() {
  let isLoggedIn = localStorage.getItem("userLoggedIn");
  let loggedInUsername = localStorage.getItem("loggedInUsername");
   
  if (isLoggedIn && loggedInUsername) {
    console.log("Welcome back, " + loggedInUsername + "!");
    loginForm.classList.toggle("hidden");
    myModal.style.display = "none";
    startBtn.classList.toggle("hidden");
    containerInput.classList.toggle("hidden");
    let ready = document.querySelector(".ready");
    ready.textContent = "";
  }
}

module.exports = { checkLoginStatus };
