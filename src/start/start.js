const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
	event.preventDefault();

	// Create the modal window and its contents
	const modal = document.createElement("div");
	modal.classList.add("modal");

	const modalContent = document.createElement("div");
	modalContent.classList.add("modal-content");

	const closeButton = document.createElement("span");
	closeButton.classList.add("close");
	closeButton.innerHTML = "&times;";
	closeButton.addEventListener("click", function() {
        setTimeout(() => {
            modal.style.display = "none";    
        }, 300);
		modalContent.classList.add("modalClose");
	});

	const modalTitle = document.createElement("h2");
	modalTitle.textContent = "Join Netflix Today";

	const modalText = document.createElement("p");
	modalText.textContent = "Enter your email to create or restart your membership.";

	const modalForm = document.createElement("form");
	modalForm.id = "signup-form-modal";
	modalForm.action = "";
	modalForm.method = "post";

	const modalLabel = document.createElement("label");
	modalLabel.setAttribute("for", "email-modal");
	modalLabel.textContent = "Email:";

	const modalInput = document.createElement("input");
	modalInput.type = "email";
	modalInput.id = "email-modal";
	modalInput.name = "email-modal";
	modalInput.required = true;

	const modalCheckbox = document.createElement("input");
	modalCheckbox.type = "checkbox";
	modalCheckbox.id = "remember-me";
	modalCheckbox.name = "remember-me";

	const modalCheckboxLabel = document.createElement("label");
	modalCheckboxLabel.setAttribute("for", "remember-me");
	modalCheckboxLabel.textContent = "Remember me";

	const modalSubmit = document.createElement("input");
	modalSubmit.type = "submit";
	modalSubmit.value = "Get Started";

	// Add the contents to the modal window
	modalForm.appendChild(modalLabel);
	modalForm.appendChild(modalInput);
	modalForm.appendChild(modalCheckbox);
	modalForm.appendChild(modalCheckboxLabel);
	modalForm.appendChild(modalSubmit);

	modalContent.appendChild(closeButton);
	modalContent.appendChild(modalTitle);
	modalContent.appendChild(modalText);
	modalContent.appendChild(modalForm);

	modal.appendChild(modalContent);

	// Show the modal window
	document.body.appendChild(modal);
	modal.style.display = "block";

	// Listen for a submit event on the modal form
	const modalFormSubmit = document.getElementById("signup-form-modal");
	modalFormSubmit.addEventListener("submit", function(event) {
		event.preventDefault(); // Prevent the form from submitting normally

		// Get the value of the email field
		const email = modalFormSubmit.elements["email-modal"].value;

		// Perform some basic validation
		if (email === "") {
			alert("Please enter your email address.");
			return;
		}

		// Save the email to local storage if the "Remember Me" checkbox is checked
		if (modalCheckbox.checked) {
			localStorage.setItem("netflix_email", email);
		}
		// Hide the modal window and display a message on the main page
		const message = document.createElement("p");
		message.textContent = `Thanks for signing up with email ${email}!`;
		document.querySelector("main").appendChild(message); 
	});

});


// Get the signup form and listen for a submit event
const getStarted = document.getElementById("startBtn");
getStarted.style.display = "none";
const ready = document.querySelector('.ready');


const main = document.querySelector('main');

const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the value of the email field
  const email = signupForm.elements.email.value;

  // Perform some basic validation
  if (email === "") {
    alert("Please enter your email address.");
    return;
  }

  // Save the email to local storage
  localStorage.setItem("netflix_email", email);

  // Hide the signup form and display a message on the main page
  signupForm.style.display = "none";
  getStarted.style.display = "block";
setTimeout(() => {
    main.appendChild(getStarted); 
}, 500);

  const message = document.createElement("p");
//   message.getElementsByClassName('pThanks');
  message.textContent = `Thanks for signing up with email ${email}!`;
  main.appendChild(message);
  ready.style.display = "none";
});

