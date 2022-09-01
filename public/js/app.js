$(function(){
  // Slick Slider
  $(".slideshow").slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
  });

  // Typing it
  $("#typing").typeIt({
    strings: ["기본에 충실한", "열정적으로", "고객과의 약속"],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  // slick - Review
  $(".review-slider").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
})