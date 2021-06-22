// Take user to the homepage when he clicks on the site logo.
const bindLogoToHomepage = () => {
	const logo = document.getElementById("logo_container");
	logo.addEventListener("click", () => {
		window.location.href = "/";
	});
};
bindLogoToHomepage();

var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

const showSignUpModal = () => {
	signUpModal.style.display = "block";
};

const showSignInModal = () => {
	signInModal.style.display = "block";
};

const raiseSignUp = () => {
	signInModal.style.display = "none";
	showSignUpModal();
};

const span = document.getElementsByClassName("close");
for (const close of span) {
	close.onclick = function () {
		signUpModal.style.display = "none";
		signInModal.style.display = "none";
	};
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == signUpModal) {
		signUpModal.style.display = "none";
	} else if (event.target == signInModal) {
		signInModal.style.display = "none";
	}
};

signUpModal.style.display = "none";
signInModal.style.display = "none";

const likesCount = 0;
const describeLikes = () => {
	const likeTag = document.getElementById("like_counter");
	likesCount === 0
		? (likeTag.innerText = "Be the first one to like this!")
		: "";
	likesCount += 1;
};
describeLikes();
