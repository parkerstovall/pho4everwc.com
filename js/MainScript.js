$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
    keyboard: false,
    pause: false,
    ride: "carousel",
    wrap: true,
  });

  //Fade In First Carousel Item
  $(".carousel .active .carousel-caption").fadeIn();

  //Fade Out on Slide Out
  $(".carousel").on("slide.bs.carousel", function () {
    $(".carousel .active .carousel-caption").fadeOut();
  });

  //Fade In on Slide In
  $(".carousel").on("slid.bs.carousel", function () {
    $(".carousel .active .carousel-caption").fadeIn();
  });
});
