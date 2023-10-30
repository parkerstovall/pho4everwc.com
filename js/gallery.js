var images = [
  "images/gallery/banhMiPoster.png",
  "images/gallery/eggrollsMade.png",
  "images/gallery/vietCanvas.png",
  "images/gallery/bunBoHuePoster.png",
  "images/gallery/phoPoster.png",
  "images/gallery/veggiePho.png",
  "images/gallery/posterBoard.png",
  "images/gallery/bunBoHueMade.png",
  "images/gallery/coffeeBeingMade.png",
  "images/gallery/thaiTea.png",
  "images/gallery/woodArt.png",
  "images/gallery/storeInside.png",
  "images/gallery/crabRangoons.png",
  "images/gallery/coffeePoster.png",
  "images/gallery/banhMiMade.png",
  "images/gallery/flowerArt.png",
];

var messages = [
  "Banh Mi Wall Art",
  "Freshly Made Eggrolls",
  "Hand Painted Map of Vietnam",
  "Traditional Bun Bo Hue Wall Art",
  "Vietnamese Beef Noodle Pho",
  "Our delcious Vegetable Pho",
  "Authentic Vietnamese Art",
  "Bun Bo Hue - House Special",
  "Vietnamese Coffee Brewing",
  "Housemade Thai Tea",
  "Woodcarved Wall Art",
  "Inside of the store",
  "Cream Cheese Crab Rangoons",
  "Vietnamese Coffee Wall Art",
  "Savory Vietnamese Banh Mi",
  "Vietnamese Traditional Sand Art",
];

document.addEventListener("DOMContentLoaded", Init, { passive: true });
let bigImage, grayCover, caption;

function Init() {
  grayCover = document.querySelector(".grayCover");
  bigImage = document.querySelector(".bigImage");
  caption = document.querySelector(".caption");
  grayCover.addEventListener("click", grayCoverClick);
}

function grayCoverClick() {
  if (bigImage.style.display == "block") {
    bigImage.style.display = "none";
    grayCover.style.display = "none";
    caption.style.display = "none";
  }
}

function showModal(id) {
  grayCover.style.display = "block";
  bigImage.setAttribute("src", images[id]);
  caption.innerText = messages[id];
  bigImage.style.display = "block";
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    const rect = document.getElementById("bigImage");
    const rect2 = rect.getBoundingClientRect();
    const x = rect2.top + 10;
    caption.style.top = `${x}px`;
  } else {
    caption.style.top = `23%`;
  }

  caption.style.display = "block";
}
