window.addEventListener("load", (event) => {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.20)";
        });
        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
