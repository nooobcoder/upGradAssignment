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

// post_heading editing_post_heading
// post_body editing_post_body
var postHeaderDiv = document.getElementById("post_heading");
var postContentDiv = document.getElementById("post_body");
var editing = false;
var editButton = document.getElementById("btn_edit_post");

const editDocument = () => {
	editing = !editing;
	if (editing) {
		postHeaderDiv.setAttribute("class", "editing_post_heading");
		postHeaderDiv.contentEditable = true;

		postContentDiv.contentEditable = true;
		postContentDiv.setAttribute("class", "editing_post_body");
		const saveIcon = document.createElement("i");
		saveIcon.setAttribute("class", "fas fa-save");
		editButton.innerText = "Save ";
		editButton.append(saveIcon);
	} else {
		const editIcon = document.createElement("i");
		editIcon.setAttribute("class", "fas fa-edit");
		editButton.innerText = "Edit ";
		editButton.append(editIcon);

		postHeaderDiv.removeAttribute("class");
		postHeaderDiv.contentEditable = false;

		postContentDiv.removeAttribute("class");
		postContentDiv.contentEditable = false;
	}
};
editButton.addEventListener("click", editDocument);

var likesCount = 0;
const describeLikes = () => {
	const likeTag = document.getElementById("like_counter");
	likeTag.innerText =
		likesCount === 0
			? "Be the first one to like this!"
			: likesCount === 1
			? "1 person likes this!"
			: `${likesCount} people have liked this!`;
	likesCount += 1;
};
describeLikes();

const addComment = () => {
	const commentTextArea = document.getElementById("comment_composer");
	if (commentTextArea.value.trim().length === 0) {
		window.alert("Comment cannot be empty");
	} else {
		const commentsList = document.getElementById("post_comments");
		const comment = document.createElement("li");
		comment.setAttribute("class", "comment");
		comment.innerText = commentTextArea.value;
		commentsList.prepend(comment);
	}
};
