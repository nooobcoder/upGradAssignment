// Modal Nodes
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");
var composePostModal = document.getElementById("composePostModal");

// Hiding the modals on first render
signUpModal.style.display = "none";
signInModal.style.display = "none";
composePostModal.style.display = "none";

const showSignUpModal = () => {
	signUpModal.style.display = "block";
};

const showSignInModal = () => {
	signInModal.style.display = "block";
};
const showComposePostModal = () => {
	composePostModal.style.display = "block";
};

// Hides the login modal and opens the signup modal
const raiseSignUp = () => {
	signInModal.style.display = "none";
	showSignUpModal();
};

const span = document.getElementsByClassName("close");
for (const close of span) {
	close.onclick = function () {
		signUpModal.style.display = "none";
		signInModal.style.display = "none";
		composePostModal.style.display = "none";
	};
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == signUpModal) {
		signUpModal.style.display = "none";
	} else if (event.target == signInModal) {
		signInModal.style.display = "none";
	} else if (event.target == composePostModal) {
		composePostModal.style.display = "none";
	}
};
