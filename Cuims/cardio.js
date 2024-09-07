
document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.getElementById("gallery");
    const imageFolder = "/repo/cardio/";

    const images = [
        "image 1.jpeg",
        "image 2.jpeg",
        "image 3.jpeg",
        "image 4.jpeg",
        "image 5.jpeg",
        "image 6.jpeg",
        "image 7.jpeg",
        // Add the names of your images here
    ];

    images.forEach(image => {
        const img = document.createElement("img");
        img.src = imageFolder + image;
        img.alt = image;
        img.addEventListener("click", () => openFullscreen(imageFolder + image));
        gallery.appendChild(img);
    });
});

function openFullscreen(src) {
    const fullscreenDiv = document.createElement("div");
    fullscreenDiv.classList.add("fullscreen");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Fullscreen Image";

    fullscreenDiv.appendChild(img);
    document.body.appendChild(fullscreenDiv);

    fullscreenDiv.addEventListener("click", () => {
        document.body.removeChild(fullscreenDiv);
    });
}