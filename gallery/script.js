const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Open Lightbox */

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
}

/* Close */

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* Next */

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    showImage();
});

/* Previous */

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    showImage();
});

/* Filter Images */

function filterImages(category) {

    const items = document.querySelectorAll(".image");

    items.forEach(item => {

        if(category === "all"){
            item.style.display = "block";
        }
        else{
            item.style.display =
            item.classList.contains(category)
            ? "block"
            : "none";
        }
    });

    document.querySelectorAll(".filters button")
        .forEach(btn => btn.classList.remove("active"));

<button class="active" onclick="filterImages('all')">All</button>
}
