var deletePostModal = document.getElementById("composePostModal");

const showDeletePostModal = () => {
	console.log("Showing");
	deletePostModal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == deletePostModal) deletePostModal.style.display = "none";
};

deletePostModal.style.display = "none";
