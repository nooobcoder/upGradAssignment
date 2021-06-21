var deletePostModal = document.getElementById("deletePostModal");
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
		deletePostModal.style.display = "none";
	};
}

const showDeletePostModal = () => {
	deletePostModal.style.display = "block";
};
const hideDeletePostModal = () => {
	deletePostModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == deletePostModal) deletePostModal.style.display = "none";
	else if (event.target == signUpModal) {
		signUpModal.style.display = "none";
	} else if (event.target == signInModal) {
		signInModal.style.display = "none";
	}
};

signUpModal.style.display = "none";
signInModal.style.display = "none";
deletePostModal.style.display = "none";
