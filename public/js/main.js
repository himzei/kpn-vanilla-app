const menuProfile  = document.querySelector("#menu_profile")
const menuNotice = document.querySelector("#menu_notice")
const menuPromotion = document.querySelector("#menu_promotion")
const menuPortfolio1 = document.querySelector("#menu_portfolio1")
const menuFaq = document.querySelector("#menu_faq")
const menuContact = document.querySelector("#menu_contact")

menuProfile.addEventListener("click", function(){
  window.scrollTo({top: document.querySelector(".profile-access").offsetTop - 100, behavior: "smooth" })
})
menuNotice.addEventListener("click", function(){
  window.scrollTo({top: document.querySelector(".notice").offsetTop - 120, behavior: "smooth" })
})
menuPromotion.addEventListener("click", function(){
  window.scrollTo({top: document.querySelector(".youtube").offsetTop - 120, behavior: "smooth" })
})
menuPortfolio1.addEventListener("click", function(){
  window.scrollTo({top: document.querySelector("#portfolio_sec1").offsetTop -150, behavior: "smooth" })
})
menuFaq.addEventListener("click", function(){
  window.scrollTo({top: document.querySelector(".faq").offsetTop -120, behavior: "smooth" })
})
menuContact.addEventListener("click", function(){
  window.scrollTo({top: document.querySelector(".contact").offsetTop -120, behavior: "smooth" })
})

// search input 이이콘 클릭시 placeholde
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "프로그램 검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
  searchInputEl.value = "";
});

// Notice Swiper JS
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// Section Links
new Swiper(".links .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".links .swiper-prev",
    nextEl: ".links .swiper-next",
  },
});

// Swiper Promotion
new Swiper(".promotion .swiper", {
  autoplay: { delay: 5000 },
  loop: true,
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// Section : Contact
// 다음 지도 띄우기
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(35.87562431932182, 128.68133577245086), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(
  35.87562431932182,
  128.68133577245086
);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 개인정보 취금 텍스트에어리어
const checkedContents = `
Ken's Programming Note(이하 ‘KPN’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.

제1조 (개인정보의 처리목적)

`;
const usercheck = document.querySelector("#usercheck");

usercheck.value = checkedContents;

// to-Top
const text = document.querySelector("#to-top .progress-text");
const badge = document.querySelector("#to-top img");
const group1 = document.querySelector("#to-top .progress-group1");
const group2 = document.querySelector("#to-top .progress-group2");

function render(textPercent, rotateNum) {
  text.innerText = textPercent + "%";
  badge.style.transform = `rotate(${rotateNum}deg)`;
}

function getPercent() {
  const scrollHeight = document.querySelector("body").offsetHeight;
  const scrollRealHeight = scrollHeight - window.innerHeight;
  const winScrollTop = window.pageYOffset;
  const scrollPercent = (winScrollTop / scrollRealHeight) * 100;
  const textPercent = Math.round(scrollPercent);
  const rotateNum = (textPercent / 100) * 360;

  render(textPercent, rotateNum);
}

document.addEventListener(
  "scroll",
  function () {
    getPercent();
  },
  false
);

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 1.0, {
    scrollTo: 0,
  });
});

// floating 찾아오는길 메일문의
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, sizeX, sizeY) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    x: sizeX,
    y: sizeY,
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".picture1", 1, 15, 20);
floatingObject(".picture2", 0.8, 18, 12);

// PortFolio 1

var scrollBody = document.querySelector(".portfolio-contents");

var scrollHeight;
var sectionOffsetTop;
var sectionRealHeight;
var scrollRealHeight;
let winScrollTop;
let scrollPercent;

var windowWidth = window.innerWidth;

var mobileSize = 1024;
var isMobile;

var el = document.querySelector(".canvas_wrap");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var imgSrc = "/images/seq/";
var imgFormat = ".jpg";
var imgLength = 116;
var pcImgSize = [1920, 1080];
var mobileImgSize = [640, 360];
var imgWidth;
var imgHeight;
var imgArray = [];
var imageIterlator = 0;

function pfSetProperty1() {
  scrollHeight = scrollBody.offsetHeight;
  winScrollTop = window.pageYOffset;
  sectionOffsetTop = scrollBody.getBoundingClientRect().top + winScrollTop;
  scrollRealHeight = scrollHeight - window.innerHeight;
  sectionScrollTop = winScrollTop - sectionOffsetTop;
  scrollPercent = sectionScrollTop / scrollRealHeight;

  isMobile = windowWidth > mobileImgSize[0] ? false : true;

  imgWidth = !isMobile ? pcImgSize[0] : mobileImgSize[0];
  imgHeight = !isMobile ? pcImgSize[1] : mobileImgSize[1];
}

function setCanvas() {
  canvas.width = imgWidth;
  canvas.height = imgHeight;
}

function renderCanvas(sequence) {
  ctx.clearRect(0, 0, imgWidth, imgHeight);
  ctx.drawImage(imgArray[sequence], 0, 0, imgWidth, imgHeight);
}

function scrollFunc() {
  var sequence = Math.min(
    imgLength,
    Math.max(0, Math.round(imgLength * scrollPercent))
  );

  renderCanvas(sequence);
}

function bindEvent() {
  window.addEventListener(
    "scroll",
    function () {
      pfSetProperty1();
      scrollFunc();
    },
    false
  );
  window.addEventListener(
    "resize",
    function () {
      pfSetProperty1();
      setCanvas();
      scrollFunc();
    },
    false
  );
}

function init() {
  el.appendChild(canvas);

  for (let i = 0; i <= imgLength; i++) {
    var img = new Image();
    var path = imgSrc + i + imgFormat;
    img.src = path;

    img.onload = function () {
      imageIterlator += 1;
      if (imageIterlator === imgLength) {
        pfSetProperty1();
        setCanvas();
        bindEvent();
        scrollFunc();
      }
    };
    imgArray.push(img);
  }
}

init();

function popWrite() {
  var popUrl = "./admin-write.html";
  var popName = "관리자 글쓰기";
  var popOption =
    "width=640, height=480, top=100, left=100, scrollbars=yes, resizable=yes, titlebar=yes, status=yes";

  window.open(popUrl, popName, popOption);
}

const pupAdminWrite = document.querySelector(
  ".notice .notice-line .inner__right"
);
pupAdminWrite.addEventListener("click", popWrite);
