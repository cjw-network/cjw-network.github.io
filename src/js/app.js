// https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165

const links = document.querySelectorAll(".arrow a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
