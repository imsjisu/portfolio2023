// main  로드 이벤트
let header = document.getElementById("header");
let mainVideo = document.querySelector("div.video");
let mainTitle = document.querySelector("div.title");
let mainArrow = document.querySelector(".scroll_right");

window.onload = function() {
  header.classList.add("on");
  mainVideo.classList.add("on");
  mainTitle.classList.add("on");
  mainArrow.classList.add("on");
}

// nav 클릭이벤트
const navBtn = document.querySelector(".menu");
const nav = document.getElementById("nav");
const navBottom = document.querySelector(".nav_bottom");
const closeBtn = document.querySelector(".btn_close>button");
const navInner = document.querySelector("#nav>.nav_inner");
const body = document.querySelector("body");
console.log(closeBtn);

const mainNavWork = document.querySelector(".nav_list>ul>li:nth-of-type(2)>a"); // WORK-PIECE
const mainNavKeyword = document.querySelector(".nav_list>ul>li:nth-of-type(3)>a"); // WORK-PIECE
const mainNavTouch = document.querySelector(".nav_list>ul>li:last-of-type>a"); // WORK-PIECE

navBtn.addEventListener("click", (e) => {
  nav.classList.add("on");
  navBottom.classList.add("on");
  navInner.classList.add("on");
  body.classList.add("on");
})
closeBtn.addEventListener("click", (e) => {
  nav.classList.remove("on");
  navBottom.classList.remove("on");
  navInner.classList.remove("on");
  body.classList.remove("on");
})
mainNavWork.addEventListener("click", (e) => {
  nav.classList.remove("on");
  navBottom.classList.remove("on");
  navInner.classList.remove("on");
  body.classList.remove("on");
})
mainNavKeyword.addEventListener("click", (e) => {
  nav.classList.remove("on");
  navBottom.classList.remove("on");
  navInner.classList.remove("on");
  body.classList.remove("on");
})
mainNavTouch.addEventListener("click", (e) => {
  nav.classList.remove("on");
  navBottom.classList.remove("on");
  navInner.classList.remove("on");
  body.classList.remove("on");
})


// 2페이지 텍스트 나타나기
// let showTxt = document.querySelector(".page2>p.txt");

// document.addEventListener("scroll", () => {
//   let scroll = window.scrollY;
//   console.log(scroll);

//   if(scroll >= 290) {
//     showTxt.classList.add("on");
//   } 
// })

// 2페이지 영아 텍스트 opacity 변경
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

// 2페이지 한글 텍스트 스크롤 이벤트
const page2Kor = document.querySelector(".page2>ul.txt_wrap");
console.log(page2Kor)

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll)

  if(scroll >= 900) {
    page2Kor.classList.add("on");
  }
})



// 3페이지 슬릭 슬라이드
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




// 3페이지 move menu 스크롤 이벤트
const page3MoveMenu = document.querySelector(".page3 .move_menu>button");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll)

  if(scroll >= 1846) {
    page3MoveMenu.classList.add("on");
  }
})

const page5MoveMenu = document.querySelector(".page5 .move_menu>button");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll)

  if(scroll >= 2770) {
    page5MoveMenu.classList.add("on");
  }
})

const page6MoveMenu = document.querySelector(".page6 .move_menu>button");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll)

  if(scroll >= 3692) {
    page6MoveMenu.classList.add("on");
  }
})


// 3페이지 nav 클릭 이벤트
const page3MoveNav = document.querySelector(".page3 .move_nav");
const page3MoveNavBottom = document.querySelector(".page3 .move_nav_bottom");

const page3CloseBtn = document.querySelector(".page3 .btn_close>button");
const page3NavInner = document.querySelector(".page3 .move_nav>.nav_inner");

const page3NavWork = document.querySelector(".page3 .nav_list>ul>li:nth-of-type(2)>a"); // WORK-PIECE
const page3NavKeyword = document.querySelector(".page3 .nav_list>ul>li:nth-of-type(3)>a"); // KEYWORD
const page3NavTouch = document.querySelector(".page3 .nav_list>ul>li:last-of-type>a"); // TOUCH

page3MoveMenu.addEventListener("click", () => {
  page3MoveNav.classList.add("on");
  page3MoveNavBottom.classList.add("on");
  page3NavInner.classList.add("on");
})
page3CloseBtn.addEventListener("click", (e) => {
  page3MoveNav.classList.remove("on");
  page3MoveNavBottom.classList.remove("on");
  page3NavInner.classList.remove("on");
})

page3NavWork.addEventListener("click", (e) => {
  page3MoveNav.classList.remove("on");
  page3MoveNavBottom.classList.remove("on");
  page3NavInner.classList.remove("on");
})
page3NavKeyword.addEventListener("click", (e) => {
  page3MoveNav.classList.remove("on");
  page3MoveNavBottom.classList.remove("on");
  page3NavInner.classList.remove("on");
})
page3NavTouch.addEventListener("click", (e) => {
  page3NavTouch.classList.remove("on");
  page3MoveNavBottom.classList.remove("on");
  page3NavInner.classList.remove("on");
})



// 3페이지 웹접근성 검사 버튼 클릭 이벤트

// 당근마켓
const dgVali = document.querySelector(".danggn_vali");
const dgValiBtn = document.querySelector(".danggn .pj_btn>ul>li:nth-of-type(2)>a");
const dgValiClose = document.querySelector(".danggn .btn_vali_close>button")

dgValiBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dgVali.classList.add("on");
  dgValiClose.classList.add("on");
})
dgValiClose.addEventListener("click", (e) => {
  dgVali.classList.remove("on");
  dgValiClose.classList.remove("on");
})

// 빙그레
const bgVali = document.querySelector(".binggrae_vali");
const bgValiBtn = document.querySelector(".binggrae .pj_btn>ul>li:nth-of-type(2)>a");
const bgValiClose = document.querySelector(".binggrae .btn_vali_close>button")
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


// 키워드 카운트 이벤트

// document.addEventListener("scroll", () => {
//   let scroll = window.scrollY;
//   console.log(scroll)

//   if(scroll >= 2700 && scroll < 3000) {
//   const counter = ($counter, max) => {
//     let now = max;

//     const handle = setInterval(() => {
//       $counter.innerHTML = Math.ceil(max - now) + "%";
    
//       // 목표수치에 도달하면 정지
//       if (now < 1) {
//         clearInterval(handle);
//       }
      
//       // 증가되는 값이 계속하여 작아짐
//       const step = now / 10;
      
//       // 값을 적용시키면서 다음 차례에 영향을 끼침
//       now -= step;
//     }, 50);
//   }

//   window.onload = () => {
//     // 카운트를 적용시킬 요소
//     const $counter = document.querySelector(".html_count");
    
//     // 목표 수치
//     const max = 85;

//     setTimeout(() => counter($counter, max), 4000);
//   }


//   }
// })


// 5페이지 nav 클릭 이벤트
const page5MoveNav = document.querySelector(".page5 .move_nav");
const page5MoveNavBottom = document.querySelector(".page5 .move_nav_bottom");

const page5CloseBtn = document.querySelector(".page5 .btn_close>button");
const page5NavInner = document.querySelector(".page5 .move_nav>.nav_inner");

const page5NavWork = document.querySelector(".page5 .nav_list>ul>li:nth-of-type(2)>a"); // WORK-PIECE
const page5NavKeyword = document.querySelector(".page5 .nav_list>ul>li:nth-of-type(3)>a"); // KEYWORD
const page5NavTouch = document.querySelector(".page5 .nav_list>ul>li:last-of-type>a"); // TOUCH

page5MoveMenu.addEventListener("click", () => {
  page5MoveNav.classList.add("on");
  page5MoveNavBottom.classList.add("on");
  page5NavInner.classList.add("on");
})
page5CloseBtn.addEventListener("click", (e) => {
  page5MoveNav.classList.remove("on");
  page5MoveNavBottom.classList.remove("on");
  page5NavInner.classList.remove("on");
})

page5NavWork.addEventListener("click", (e) => {
  page5MoveNav.classList.remove("on");
  page5MoveNavBottom.classList.remove("on");
  page5NavInner.classList.remove("on");
})
page5NavKeyword.addEventListener("click", (e) => {
  page5MoveNav.classList.remove("on");
  page5MoveNavBottom.classList.remove("on");
  page5NavInner.classList.remove("on");
})
page3NavTouch.addEventListener("click", (e) => {
  page3NavTouch.classList.remove("on");
  page3MoveNavBottom.classList.remove("on");
  page3NavInner.classList.remove("on");
})
