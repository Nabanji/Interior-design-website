// let sidebar = document.querySelector('.bars');
// let navLinks = document.querySelector('.nav-links');
// let navLink = document.querySelectorAll('.nav-link');
// sidebar.addEventListener('click', (e) => {
//     e.preventDefault();
//     // navLink.style.margin = '4px 0px';
//     sidebar.classList.toggle('fa-times');
//     if (sidebar.classList.contains('fa-times')) {
//         navLinks.style.display = 'block';
//         // navLinks.style.transition = '.6s all ease-in-out';
//         // navLinks.style.border = '1px solid black';
//         navLink.forEach((link) => {
//             // navLinks.style.display = 'block';
//             // link.style.margin = '4px 0px';
//             // link.style.border = '1px solid black'
//             link.style.width = '90px'
//             link.style.marginTop = '4px';
//             link.style.fontSize = '22px';
//             link.style.transition = '.6s all ease-in-out';
//         });
//     } else {
//         navLinks.style.display = 'none';
//     }
//     sidebar.style.alignSelf = 'flex-start';
//     // navLinks.style.display = 'block';
// })

document.addEventListener("DOMContentLoaded", function () {
    sidebar.classList.add('fa-bars');

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