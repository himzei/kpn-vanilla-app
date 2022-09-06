// SVG Path
var pf2 = document.querySelector(".portfolio2");
var pf2Top = pf2.getBoundingClientRect().top + window.scrollY;
var pf2Bottom = pf2Top + pf2.offsetHeight;
var svgPath = document.querySelector("#portfolio2_svg path");
var isPlay = false;

function svgSet() {
  svgPath.style.strokeDasharray =
    svgPath.getTotalLength() + "," + svgPath.getTotalLength();
  svgPath.style.strokeDashoffset = svgPath.getTotalLength();
}

function drawSvg() {
  var winScrollTop = window.pageYOffset - pf2Top;
  var scrollHeight = pf2.offsetHeight;
  var scrollRealHeight = scrollHeight - window.innerHeight;
  var parallaxPercent = (winScrollTop / scrollRealHeight) * 100 * 1.5;
  var parallaxStartValue = svgPath.getTotalLength();

  var parallaxMoveDistance = Math.max(
    parallaxStartValue - parallaxStartValue,
    Math.min(
      parallaxStartValue,
      parallaxStartValue - parallaxStartValue * (parallaxPercent / 100)
    )
  );

  svgPath.style.strokeDashoffset = parallaxMoveDistance;

  if (parallaxPercent >= 100 && !isPlay) {
    isPlay = true;
    document.querySelector(".video_wrap").style.opacity = 1;

    setTimeout(function () {
      document.querySelector(".video_wrap video").play();
      document.querySelector(".svg_wrap").style.opacity = 0;
    }, 500);
  } else if (parallaxPercent < 100 && isPlay) {
    isPlay = false;
    document.querySelector(".video_wrap").style.opacity = 0;

    document.querySelector(".video_wrap video").pause();
    document.querySelector(".video_wrap video").currentTime = 0;

    document.querySelector(".svg_wrap").style.opacity = 1;
  }
}

function init() {
  svgSet();
  drawSvg();
}

window.addEventListener(
  "scroll",
  function () {
    drawSvg();
    // drawSvg();
    // if (window.scrollY > pf2Top && window.scrollY < pf2Bottom) {
    //   drawSvg();
    // }
  },
  false
);
init();
