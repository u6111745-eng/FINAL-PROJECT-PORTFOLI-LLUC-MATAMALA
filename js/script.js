// GALERIA DE FOTOGRAFIES

let photos = document.querySelectorAll(".gallery-image img");
let lightbox = document.querySelector(".lightbox");
let lightboxImage = document.querySelector(".lightbox-image");
let closeButton = document.querySelector(".lightbox-close");
let nextButton = document.querySelector(".lightbox-next");
let prevButton = document.querySelector(".lightbox-prev");

let currentPhoto = 0;

// Obrir una fotografia
function openPhoto(number) {
  currentPhoto = number;
  lightboxImage.src = photos[currentPhoto].src;
  lightbox.classList.add("active");
}

// Tancar la fotografia
function closePhoto() {
  lightbox.classList.remove("active");
}

// Fotografia següent
function nextPhoto() {
  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  lightboxImage.src = photos[currentPhoto].src;
}

// Fotografia anterior
function prevPhoto() {
  currentPhoto--;

  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  lightboxImage.src = photos[currentPhoto].src;
}

// Clicar les fotografies de la galeria
photos.forEach(function (photo, number) {
  photo.addEventListener("click", function () {
    openPhoto(number);
  });
});

// Botó de tancar
closeButton.addEventListener("click", function () {
  closePhoto();
});

// Botó següent
nextButton.addEventListener("click", function () {
  nextPhoto();
});

// Botó anterior
prevButton.addEventListener("click", function () {
  prevPhoto();
});

// Tancar clicant el fons negre
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closePhoto();
  }
});

// Controls del teclat
document.addEventListener("keydown", function (event) {
  if (lightbox.classList.contains("active")) {
    if (event.key === "Escape") {
      closePhoto();
    }

    if (event.key === "ArrowRight") {
      nextPhoto();
    }

    if (event.key === "ArrowLeft") {
      prevPhoto();
    }
  }
});

// MENÚ MÒBIL

let menuButton = document.querySelector(".menu-button");
let mobileMenu = document.querySelector(".mobile-menu");
let closeMenuButton = document.querySelector(".close-menu");
let menuBackground = document.querySelector(".menu-background");
let menuLinks = document.querySelectorAll(".mobile-navigation a");

// Obrir el menú
function openMenu() {
  mobileMenu.classList.add("active");
  menuBackground.classList.add("active");
}

// Tancar el menú
function closeMenu() {
  mobileMenu.classList.remove("active");
  menuBackground.classList.remove("active");
}

// Botó de les tres ratlles
menuButton.addEventListener("click", function () {
  openMenu();
});

// Botó de la X
closeMenuButton.addEventListener("click", function () {
  closeMenu();
});

// Clicar fora del menú
menuBackground.addEventListener("click", function () {
  closeMenu();
});

// Clicar un apartat del menú
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});
