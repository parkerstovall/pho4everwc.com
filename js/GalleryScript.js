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

$(document).ready(function () {
  $(".grayCover").click(function () {
    if ($(".bigImage").css("display") == "block") {
      $(".bigImage").hide();
      $(".grayCover").hide();
      $(".caption").hide();
    }
  });
});

function showModal(id) {
  $(".grayCover").show();
  $(".bigImage").attr("src", images[id]);
  $(".caption").text(messages[id]);
  $(".bigImage").show();

  if ($(window).width() < 768) {
    var rect = document.getElementById("bigImage");
    var rect2 = rect.getBoundingClientRect();
    var x = rect2.top + 10;
    $(".caption").css("top", x + "px");
  } else {
    $(".caption").css("top", "23%");
  }

  $(".caption").show();
}
