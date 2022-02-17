const apperNav = document.querySelector(".apperNav");
const overflowBody = document.querySelector("body");

function burgerOpen(x) {
    x.classList.toggle("change");
    apperNav.classList.toggle("apperNavbar");

    overflowBody.classList.toggle("bodyActive");
}