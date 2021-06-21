var signUpModal = document.getElementById("signUpModal");

const showSignUpModal = () => {
	signUpModal.style.display = "block";
};

const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
	signUpModal.style.display = "none";
};
