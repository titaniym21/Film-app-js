const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const myModal = document.getElementById("myModal");
  myModal.classList.remove("hidden");
  myModal.classList.add("myModalMain");
  const modalMain = document.querySelector("main");

  document.body.addEventListener("click", function (event) {
    if (event.target == modalMain) {
      myModal.style.display = "none";
    }
  });
  loginForm.addEventListener("click", function (event) {
    myModal.style.display = "block";
  });
});

// _________

function registerUser() {
  let username = document.querySelector('input[type="text"]').value;
  let email = document.querySelector('input[type="email"]').value;
  let password = document.querySelector('input[type="password"]').value;

  let user = {
    username: username,
    email: email,
    password: password
  };
  
  localStorage.setItem(email, JSON.stringify(user));

  document.querySelector('input[type="text"]').value = '';
  document.querySelector('input[type="email"]').value = '';
  document.querySelector('input[type="password"]').value = '';
  console.log('Registration successful.');
}


function loginUser() {

  let email = document.getElementById('inputLog');
  let password = document.getElementById('inputPass');
  let userData = JSON.parse(localStorage.getItem(email.value),('userData'));

  if (userData.email === email.value && userData.password === password.value) {
    console.log('Login successful. Welcome ' + userData.username + '!');

  if (userData) {
  let userInfoElement = document.getElementById('user-info');
  userInfoElement.textContent = 'Logged ' + userData.username + ' ' + userData.email;
  }
    myModal.style.display = "none";
    const startBtn = document.getElementById("startBtn");
    startBtn.style.display = "block";
    let ready = document.querySelector('.ready');
    ready.textContent = 'Hetflix is a video streaming service that lets you watch a variety of award-winning TV series, movies, anime, documentaries, and more on thousands of Internet-connected devices.';

  } else {
    console.log('Incorrect email or password. Please try again.');
  }
  document.querySelector('input[type="email"]').value = '';
  document.querySelector('input[type="password"]').value = '';
}


