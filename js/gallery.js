document.addEventListener("DOMContentLoaded", Init, { passive: true });
let bigImage, grayCover, caption;

function Init() {
  grayCover = document.getElementById("GrayCover");
  bigImage = document.getElementById("BigImage");
  caption = document.getElementById("Caption");
  grayCover.addEventListener("click", grayCoverClick);
  loadImages();
}

function getPromiseFromEvent(item, event) {
  return new Promise((resolve) => {
    const listener = () => {
      item.removeEventListener(event, listener);
      resolve();
    };
    item.addEventListener(event, listener);
  });
}

async function loadImages() {
  const imgs = document.querySelectorAll(".galleryImage");

  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    img.addEventListener("click", () => showModal(img));
  }
}

function grayCoverClick() {
  if (bigImage.style.display == "block") {
    bigImage.style.display = "none";
    grayCover.style.display = "none";
    caption.style.display = "none";
  }
}

async function showModal(img) {
  grayCover.style.display = "block";

  const imgSrc = img.getAttribute("data-src");
  const imgCaption = img.getAttribute("data-caption");

  bigImage.setAttribute("src", imgSrc);
  caption.innerText = imgCaption;
  await getPromiseFromEvent(bigImage, "load");

  bigImage.style.display = "block";

  const rect = bigImage.getBoundingClientRect();
  const width = rect.width - 100;
  caption.style.maxWidth = `${width}px`;
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    const x = rect.top + 10;
    caption.style.top = `${x}px`;
  } else {
    caption.style.top = `23%`;
  }

  caption.style.display = "block";
}
