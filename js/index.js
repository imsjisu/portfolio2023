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

let innerTitleLine = document.querySelector("div.line");
let danggn = document.querySelector(".danggn");
let hermes = document.querySelector(".hermes");
let binggrae = document.querySelector(".binggrae");
let ralph = document.querySelector(".ralph");

let html = document.querySelector(".page5_inner>.keywords>span:first-of-type");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll)

  if(scroll >= 1180 && scroll < 1300) {
    innerTitleLine.classList.add("on");
  } else if(scroll >= 1300 && scroll < 1600){
    danggn.classList.add("on");
  } else if(scroll >= 1700 && scroll < 2100){
    hermes.classList.add("on");
  } else if(scroll >= 2100 && scroll < 2674){
    binggrae.classList.add("on");
  } else if(scroll >= 2674){
    ralph.classList.add("on");
  } else if(scroll >=3400) {
    html.classList.add("on");
  }
})

