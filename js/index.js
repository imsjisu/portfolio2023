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
  console.log(scroll)

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
console.log(projectTxt);

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
