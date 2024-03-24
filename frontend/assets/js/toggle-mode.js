const mode_button = document.getElementById('mode-button');
const header = document.querySelectorAll('header *');
const body = document.body;
body.style.backgroundColor = "whitesmoke";
mode_button.innerHTML = "<i class='bi bi-moon'></i>";
const aboutus = document.querySelectorAll(".about-us")
const socialMedia = document.querySelectorAll(".media a")
const membercard = document.querySelectorAll(".member-card")
const icon = document.querySelectorAll(".icon")

function changeColor(elements, color) {
	elements.forEach((item) => {
		item.style.color = color;
	})
}
function changeBorderColor(items, color) {
	items.forEach(item => {
		item.style.borderColor = color
	});
}
function changeBackgroundColor(items, color) {
	items.forEach(item => {
		item.style.background = color
		item.style.borderRadius = "10px"
		item.style.hover = "background-color: #ead8d8; border-radius: 10px; transition: background-color 0.5s;"
	});
}
function modeToggle() {
	if (body.style.backgroundColor === "whitesmoke") {
		body.style.backgroundColor = "#020617";
		mode_button.innerHTML = "<i class='bi bi-brightness-high' style='color: white'></i>";
		body.style.color = "white"
		changeColor(header, "white");
		changeColor(aboutus, "black")
		changeColor(socialMedia, "black")
		changeBorderColor(membercard, "white")
		changeBackgroundColor(icon, "white")

	} else {
		body.style.backgroundColor = "whitesmoke";
		mode_button.innerHTML = "<i class='bi bi-moon'></i>";
		body.style.color = "black"
		changeColor(header, "black");
		changeBorderColor(membercard, "black")
		changeBackgroundColor(icon, "none")
	}


}
mode_button.addEventListener('click', modeToggle);