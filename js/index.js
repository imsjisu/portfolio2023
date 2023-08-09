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


// 사이트 컨텐츠 휠이벤트
function wheel (element){
  for(let i=0; i<siteTrain.length; i++){
    element[i].parentElement.classList.add("on");
  }
}

// 브랜드 이미지
let innerTitleLine = document.querySelector("div.line");
let danggn = document.querySelector(".danggn");
let hermes = document.querySelector(".hermes");
let binggrae = document.querySelector(".binggrae");
let ralph = document.querySelector(".ralph");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  // console.log(scroll)

  if(scroll >= 1180 && scroll < 1300) {
    innerTitleLine.classList.add("on");
  } else if(scroll >= 1300 && scroll < 1600){
    danggn.classList.add("on");
  } else if(scroll >= 1700 && scroll < 2100){
    hermes.classList.add("on");
  } else if(scroll >= 2100 && scroll < 2500){
    binggrae.classList.add("on");
  } else if(scroll >= 2500){
    ralph.classList.add("on");
  }
  // else if(scroll >=3400) {
  //   html.classList.add("on");
  // }
})


// 사이트 컨텐츠 클릭 이벤트
let danggnImg = document.querySelector(".danggn_inner");
let hermesImg = document.querySelector(".hermes_inner");
let binggraeImg = document.querySelector(".binggrae_inner");
let ralphImg = document.querySelector(".ralph_inner");
let projectTxt = document.querySelectorAll(".project_txt"); // 설명 섹션 부분
// console.log(projectTxt);

danggnImg.addEventListener("click", (e) => {
  danggnImg.classList.add("color");
  projectTxt[0].classList.add("on");
})

hermesImg.addEventListener("click", (e) => {
  hermesImg.classList.add("color");
  projectTxt[1].classList.add("on");
})

binggraeImg.addEventListener("click", (e) => {
  binggraeImg.classList.add("color");
  projectTxt[2].classList.add("on");
})

ralphImg.addEventListener("click", (e) => {
  ralphImg.classList.add("color");
  projectTxt[3].classList.add("on");
})


// let html = document.querySelector(".page5_inner>.keywords>span:first-of-type");
