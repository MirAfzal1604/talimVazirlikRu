window.addEventListener("scroll", reveal);

function reveal() {
    const revealApper = document.querySelectorAll(".reveal");

    for (i = 0; i < revealApper.length; i++) {
        const windowinner = window.innerHeight;
        const revealReverseTop = revealApper[i].getBoundingClientRect().top;
        const revealReversepoint = 600;

        if (revealReverseTop < windowinner - revealReversepoint) {
            revealApper[i].classList.add("active");
        } else {
            revealApper[i].classList.remove("active");
        }
    }
}