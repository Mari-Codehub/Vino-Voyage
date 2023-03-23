$(document).ready(function () {
  $(".gallery__carousel").owlCarousel({
    items: 6,
    loop: true,
    autoplay: false,
    dots: false,
    nav: false,
    margin: 30,
    responsive: {
      1600: {
        items: 4,
      },
      1200: {
        items: 3,
      },
      768: {
        items: 1,
      },
      320: {
        items: 1,
      },
    },
  });
});

let burgerIcon = document.getElementById("burgerIcon");
let burgerMenu = document.getElementById("burgerMenu");

let menuVisible = false;

burgerIcon.addEventListener("click", function () {
  if (menuVisible) {
    burgerMenu.style.display = "none";
    menuVisible = false;
  } else {
    burgerMenu.style.display = "block";
    menuVisible = true;
  }
});
