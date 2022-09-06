// SVG Path
var svgWrap = document.querySelector(".svg_wrap");

var pf2 = document.querySelector(".portfolio2");
var pf2Top = pf2.getBoundingClientRect().top + window.scrollY;
var pf2Bottom = pf2Top + pf2.offsetHeight;
var svgPath = document.querySelector("#portfolio2_svg path");
var isPlay = false;
console.log(pf2Top);
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
  console.log(parallaxMoveDistance);

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
var scrollNum = pf2Bottom - 3000;
window.addEventListener(
  "scroll",
  function () {
    if (window.scrollY > pf2Top && window.scrollY < pf2Bottom) {
      svgWrap.classList.add("fix");
      drawSvg();
    }
  },
  false
);
init();
