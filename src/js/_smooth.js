(function (document) {

    const links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        const href = links[i].getAttribute("href");
        if (href !== null && href.length > 1 && href.indexOf("#") === 0) {
            links[i].addEventListener("click", smoothScrollHandler);
        }
    }

    function smoothScrollHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
})(document);
