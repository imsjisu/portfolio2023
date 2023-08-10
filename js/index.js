// main  로드 이벤트
let header = document.getElementById("header");
let mainVideo = document.querySelector("div.video");
let mainTitle = document.querySelector("div.title");
let mainTxt1 = document.querySelector(".main_txt>span:first-of-type");
let mainTxt2 = document.querySelector(".main_txt>span:last-of-type");

window.onload = function() {
  header.classList.add("on");
  mainVideo.classList.add("on");
  mainTitle.classList.add("on");
  mainTxt1.classList.add("on");
  mainTxt2.classList.add("on");
}


// 2페이지 텍스트 opacity 변경
let opacityTxt1 = document.querySelector(".page2>p.txt>span:first-of-type");
let opacityTxt2 = document.querySelector(".page2>p.txt>span:nth-of-type(2)");
let opacityTxt3 = document.querySelector(".page2>p.txt>span:nth-of-type(3)");
let opacityTxt4 = document.querySelector(".page2>p.txt>span:nth-of-type(4)");
let opacityTxt5 = document.querySelector(".page2>p.txt>span:nth-of-type(5)");
let opacityTxt6 = document.querySelector(".page2>p.txt>span:nth-of-type(6)");
let opacityTxt7 = document.querySelector(".page2>p.txt>span:nth-of-type(7)");
let opacityTxt8 = document.querySelector(".page2>p.txt>span:nth-of-type(8)");
let opacityTxt9 = document.querySelector(".page2>p.txt>span:nth-of-type(9)");
let opacityTxt10 = document.querySelector(".page2>p.txt>span:last-of-type");
console.log(opacityTxt9);

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll)

  if(scroll >= 300 && scroll < 360) {
    opacityTxt1.classList.add("on");
  } else if(scroll >= 360 && scroll < 420){
    opacityTxt2.classList.add("on");
  } else if(scroll >= 420 && scroll < 480){
    opacityTxt3.classList.add("on");
  } else if(scroll >= 480 && scroll < 540){
    opacityTxt4.classList.add("on");
  } else if(scroll >= 540 && scroll < 600){
    opacityTxt5.classList.add("on");
  } else if(scroll >= 600 && scroll < 660){
    opacityTxt6.classList.add("on");
  } else if(scroll >= 660 && scroll < 720){
    opacityTxt7.classList.add("on");
  } else if(scroll >= 720 && scroll < 780){
    opacityTxt8.classList.add("on");
  } else if(scroll >= 780 && scroll < 840){
    opacityTxt9.classList.add("on");
  } else if(scroll >= 840){
    opacityTxt10.classList.add("on");
  }
})


// 프로젝트 컨텐츠 배너
$(document).ready(function() {

  $('.pj_train').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    vertial: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
});

