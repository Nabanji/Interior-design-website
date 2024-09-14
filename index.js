document.addEventListener("DOMContentLoaded", function () {
    const projectContent = document.querySelector(".project-content");
    const prevButton = projectContent.querySelector(".prev");
    const nextButton = projectContent.querySelector(".next");
    const imageContainers = projectContent.querySelectorAll(".image-container");

    const numVisibleImages = 4; // Number of images to display at a time
    let currentIndex = 0;

    // Show or hide images based on the current index
    function updateImageVisibility() {
        imageContainers.forEach(function (container, index) {
            if (index >= currentIndex && index < currentIndex + numVisibleImages) {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
    }

    // Move to the previous set of images
    prevButton.addEventListener("click", function () {
        currentIndex = Math.max(currentIndex - numVisibleImages, 0);
        updateImageVisibility();
    });

    // Move to the next set of images
    nextButton.addEventListener("click", function () {
        const maxIndex = Math.max(imageContainers.length - numVisibleImages, 0);
        currentIndex = Math.min(currentIndex + numVisibleImages, maxIndex);
        updateImageVisibility();
    });

    // Initial setup to show the first set of images
    updateImageVisibility();
});

