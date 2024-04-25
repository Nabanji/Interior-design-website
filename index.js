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

/*
const testimonials = [
    {
        name: "Franklin Saint",
        occupation: "Real Estate",
        testimony: "Working with DesignMe Interior Design was an absolute pleasure! From the initial consultation to the final reveal, their team showed unparalleled professionalism and creativity. They truly listened to our ideas and preferences, transforming our space into a beautiful and functional environment that exceeded our expectations. We couldn't be happier with the results and would highly recommend DesignMe Interior Design to anyone looking to elevate their home or office décor."
    },
    {
        name: "Beth Skate",
        occupation: "interior designer",
        testimony: "XYZ Interior Design brought our vision to life in ways we never imagined possible. Their attention to detail and eye for design turned our dull and uninspired rooms into vibrant, inviting spaces that reflect our personality perfectly. The team's expertise in color schemes, furniture selection, and spatial arrangement made the entire process seamless and enjoyable. We are thrilled with the outcome and can't thank XYZ Interior Design enough for their exceptional work!"
    },
    {
        name: "Bill Will",
        occupation: "Engineer",
        testimony: "Choosing XYZ Interior Design was the best decision we made for our home renovation project. From the moment we met with their team, we knew we were in good hands. Their creative approach, coupled with their knowledge of current design trends, transformed our outdated living spaces into modern, stylish rooms that we now love spending time in. The attention to detail and personalized service they provided exceeded our expectations. We are incredibly grateful for the dedication and passion they put into every aspect of our project."
    }
];
*/