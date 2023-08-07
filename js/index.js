

// 스크롤 시 header 고정
const header = document.getElementById('header');


document.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  // console.log(scroll);
  if (scroll <= 0) {
    header.classList.remove('active');
  } else {
  header.classList.add('active');
  }
});

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX - scrollX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}


const contents = document.querySelectorAll(".section-group");
const sections = document.querySelectorAll(".section-group>section.section");
// const lis = document.querySelectorAll("aside>.quick>li");
console.log(sections);

// 윈도우 높이값을 가져와서 (body값은 모든 컨텐츠의 높이이기 때문에 안됨)
// #container > div 높이값으로 지정
// 윈도우 resize가 돼도 동일하게 적용
let devWidth = window.innerWidth;
console.log(devWidth);

window.addEventListener("resize", () => {
  devWidth = window.innerWidth;
})

for (let i=0; i<contents.length; i++) {
  contents[i].style.width = `${devWidth}px`;
}

// 🌐함수 (prev, next 2가지에 사용)
function wheelEvent(scrTop) {
  window.scroll({
    top: scrTop,
    left: 0,
    behavior: "smooth"
  });

    for(let k=0; k<sections.length; k++){
      if(scrTop >= k*devWidth && scrTop < (k+1)*devWidth) {
        
        // section(컨텐츠)에 on지웠다가 붙여라
        sections.forEach(item => {
          item.classList.remove("on");
        })
        sections[k].classList.add("on");
      }
    }
  }