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

// nav 클릭이벤트
const navBtn = document.querySelector(".menu");
const nav = document.getElementById("nav");
const closeBtn = document.querySelector(".btn_close>button");
console.log(closeBtn);

navBtn.addEventListener("click", (e) => {
  nav.classList.add("on");
})
closeBtn.addEventListener("click", (e) => {
  nav.classList.remove("on");
})


// 2페이지 텍스트 나타나기
let showTxt = document.querySelector(".page2>p.txt");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll);

  if(scroll >= 290) {
    showTxt.classList.add("on");
  } 
})

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

// 2페이지 한글 텍스트 효과
// const SEC  = 0.5;
// function clip_text(dom){
//     const childs = dom.children;
//     for(let i=0; i<childs.length; i++){
//         childs[i].style.animationDelay = `${SEC * i}s`
//         childs[i].classList.add('on');
//     }
// }
 
// /* ✨ 실행 */
// const test = document.getElementById('txt_wrapp');
 
// clip_text(test);


// 프로젝트 컨텐츠 배너
$(document).ready(function() {

  $('.pj_train').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    vertial: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
});


// 웹접근성 검사 버튼 클릭 이벤트

// 당근마켓

// 빙그레
const bgVali = document.querySelector(".binggrae_vali");
const bgValiBtn = document.querySelector(".binggrae .pj_btn>ul>li:nth-of-type(2)>a");
const bgValiClose = document.querySelector(".btn_vali_close>button")
console.log(bgValiBtn);

bgValiBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bgVali.classList.add("on");
  bgValiClose.classList.add("on");
})
bgValiClose.addEventListener("click", (e) => {
  bgVali.classList.remove("on");
  bgValiClose.classList.remove("on");
})
