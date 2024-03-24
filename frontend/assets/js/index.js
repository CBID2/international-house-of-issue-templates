const current_date = new Date();
const current_year = current_date.getFullYear();
const copy = document.getElementById('copy');
copy.innerHTML = `&copy; ${current_year} International House of Issue Templates`

const mode_button = document.getElementById('mode-button');
const logo = document.getElementById('logo')
const body = document.body;
body.style.backgroundColor = "whitesmoke";
mode_button.innerHTML = "<i class='bi bi-moon'></i>";

function changeColor(elements, color) {
    elements.forEach((item) => {
        item.style.color = color;
    })
}
function modeToggle() {
    if (body.style.backgroundColor === "whitesmoke") {
        body.style.backgroundColor = "#020617";
        mode_button.innerHTML = "<i class='bi bi-brightness-high' style='color: white'></i>";
        body.style.color = "white"
        about.style.color = "white"
        changeColor(link, "white")
        changeColor(intro, "white")
    } else {
        body.style.backgroundColor = "whitesmoke";
        mode_button.innerHTML = "<i class='bi bi-moon'></i>";
        logo.innerHTML = `<img src="/assets/images/blacklogo.png" alt="logo" width="200px">`
        body.style.color = "black"
        about.style.color = "black"
        changeColor(link, "black")
        changeColor(intro, "black")
    }


}
mode_button.addEventListener('click', modeToggle);
copy.innerHTML = `&copy; ${current_year} International House of Issue Templates`

