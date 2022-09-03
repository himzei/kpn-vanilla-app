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
