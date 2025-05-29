$(window).load(function () {
  $("#preloader").fadeOut("slow");
});

$(document).ready(function () {
  new WOW().init();

  $("#top-nav").onePageNav({
    currentClass: "current",
    changeHash: true,
    scrollSpeed: 0,
  });

  //animated header class
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 200) {
      //console.log('a');
      $(".navigation").addClass("animated");
    } else {
      //console.log('a');
      $(".navigation").removeClass("animated");
    }
  });

  $(".bio-slider").owlCarousel({
    singleItem: true,
    pagination: true,
    autoPlay: 5000,
  });
});
