function toggleCard(card) {
    card.classList.toggle("expanded");
    const content = card.querySelector(".card-content");
    const paragraph = card.querySelector(".card-paragraph1, .card-paragraph2, .card-paragraph3");
    if (card.classList.contains("expanded")) {
        content.style.display = "block";
        if (paragraph) {
            paragraph.style.display = "none";
        }
    } else {
        content.style.display = "none";
        if (paragraph) {
            paragraph.style.display = "block";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
        document.querySelectorAll("section").forEach(section => {
            var underline = section.querySelector(".underline");
            var sectionPosition = section.getBoundingClientRect().top;
            var sectionBottom = section.getBoundingClientRect().bottom;
            var screenHeight = window.innerHeight;

            if (sectionPosition < screenHeight * 10 && sectionBottom > 10) {
                underline.classList.add("active");
            } else {
                underline.classList.remove("active");
            }
        });

        // Handle navbar position
        var navbar = document.getElementById("navbar");
        var homeSection = document.getElementById("Home");
        var homeBottom = homeSection.getBoundingClientRect().bottom;

        if (homeBottom <= 0) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
        document.querySelectorAll("section").forEach(section => {
            var underline = section.querySelector(".underline");
            var verticalLine = section.id === "Education" ? section.querySelector(".vertical-line") : null;
            var sectionPosition = section.getBoundingClientRect().top;
            var sectionBottom = section.getBoundingClientRect().bottom;
            var screenHeight = window.innerHeight;

            if (sectionPosition < screenHeight * 0.75 && sectionBottom > 0) {
                underline.classList.add("active");
                if (verticalLine) {
                    verticalLine.classList.add("active");
                }

                // Add visible class to the paragraph in "About me"
                if (section.id === "AboutMe") {
                    const paragraph = section.querySelector(".ease-in");
                    if (paragraph) {
                        paragraph.classList.add("visible");
                    }
                }
            } else {
                underline.classList.remove("active");
                if (verticalLine) {
                    verticalLine.classList.remove("active");
                }

                // Remove visible class from the paragraph when it leaves the viewport
                if (section.id === "AboutMe") {
                    const paragraph = section.querySelector(".ease-in");
                    if (paragraph) {
                        paragraph.classList.remove("visible");
                    }
                }
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#gallery-image1, #gallery-image2, #gallery-image3, #gallery-image4");
    const imageText = document.getElementById("image-text");

    images.forEach(image => {
        image.addEventListener("click", function () {
            const textId = image.getAttribute("data-text-id");
            const textElement = document.getElementById(textId);

            if (image.classList.contains("active")) {
                images.forEach(img => {
                    img.classList.remove("fade", "active", "move-to-center");
                    img.style.display = "block";
                });
                imageText.classList.remove("visible");
                textElement.classList.remove("fade-in");
                textElement.style.display = "none";
            } else {
                images.forEach(img => {
                    if (img !== image) {
                        img.style.display = "none";
                    } else {
                        img.style.display = "block";
                    }
                });
                image.classList.add("active", "move-to-center");
                imageText.classList.add("visible");
                textElement.classList.add("fade-in");
                textElement.style.display = "block";
            }
        });
    });

    imageText.addEventListener("click", function () {
        images.forEach(img => {
            img.classList.remove("fade", "active");
            img.style.display = "block";
        });
        imageText.classList.remove("visible");
        document.querySelectorAll("#image-text p").forEach(p => p.style.display = "none");
    });
});


