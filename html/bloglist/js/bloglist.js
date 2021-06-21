var deletePostModal = document.getElementById("composePostModal");

const showDeletePostModal = () => {
	deletePostModal.style.display = "block";
};
const hideDeletePostModal = () => {
	deletePostModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == deletePostModal) deletePostModal.style.display = "none";
};

deletePostModal.style.display = "none";
