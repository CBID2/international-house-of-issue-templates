// Get the toggle button element
const toggleButton = document.getElementById("toggle-button");

// Add a click event listener to the toggle button
toggleButton.addEventListener("click", () => {
	// Toggle the "dark-mode" class on the body element
	document.body.classList.toggle("dark-mode");
});
