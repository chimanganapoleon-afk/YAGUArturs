
function toggleMenu() {
    const menu = document.getElementById("corpMenu");
    if (menu) menu.classList.toggle("active");
}

document.addEventListener("click", function (event) {
    const menu = document.getElementById("corpMenu");
    const button = document.querySelector(".hamburger");
    if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("active");
    }
});
