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

/* NEXT IMAGE */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

/* PREVIOUS IMAGE */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

/* CLOSE LIGHTBOX WHEN CLICKING OUTSIDE IMAGE */

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

/* FILTER IMAGES */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /* REMOVE ACTIVE CLASS */

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        /* ADD ACTIVE CLASS */

        button.classList.add("active");

        /* GET CATEGORY */

        const category = button.textContent.toLowerCase();

        const images = document.querySelectorAll(".image");

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

/* KEYBOARD NAVIGATION */

document.addEventListener("keydown", (e) => {

    if(lightbox.style.display === "flex"){

        /* RIGHT ARROW */

        if(e.key === "ArrowRight"){

            currentIndex++;

            if(currentIndex >= galleryImages.length){

                currentIndex = 0;

            }

            showImage();

        }

        /* LEFT ARROW */

        if(e.key === "ArrowLeft"){

            currentIndex--;

            if(currentIndex < 0){

                currentIndex = galleryImages.length - 1;

            }

            showImage();

        }

        /* ESC KEY */

        if(e.key === "Escape"){

            lightbox.style.display = "none";

        }

    }

});
