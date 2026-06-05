document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".gallery img");

    const lightbox = document.querySelector(".lightbox");

    const lightboxImg = document.querySelector(".lightbox-img");

    const closeBtn = document.querySelector(".close");

    const nextBtn = document.querySelector(".next");

    const prevBtn = document.querySelector(".prev");

    const filterButtons = document.querySelectorAll(".filters button");

    let currentIndex = 0;

    /* OPEN LIGHTBOX */

    galleryImages.forEach((img, index) => {

        img.addEventListener("click", () => {

            currentIndex = index;

            showImage();

            lightbox.style.display = "flex";

        });

    });

    /* SHOW IMAGE */

    function showImage() {

        lightboxImg.src = galleryImages[currentIndex].src;

    }

    /* CLOSE LIGHTBOX */

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    /* NEXT BUTTON */

    nextBtn.addEventListener("click", () => {

        currentIndex++;

        if(currentIndex >= galleryImages.length){

            currentIndex = 0;

        }

        showImage();

    });

    /* PREVIOUS BUTTON */

    prevBtn.addEventListener("click", () => {

        currentIndex--;

        if(currentIndex < 0){

            currentIndex = galleryImages.length - 1;

        }

        showImage();

    });

    /* FILTER IMAGES */

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            filterButtons.forEach((btn) => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const category =
            button.textContent.toLowerCase();

            const images =
            document.querySelectorAll(".image");

            images.forEach((image) => {

                if(category === "all"){

                    image.style.display = "block";

                }
                else{

                    if(image.classList.contains(category)){

                        image.style.display = "block";

                    }
                    else{

                        image.style.display = "none";

                    }

                }

            });

        });

    });

});
