const backgroundImgs = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
];

const backgroundImg = document.querySelector("#background_img");

const chooseBackgroundImg =
  backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];

const bgImg = document.createElement("img");
bgImg.src = chooseBackgroundImg;

document.body.appendChild(bgImg);

//const myName = document.createElement("요소"); -> JS에서 HTML의 요소를 생성
//document.body.appendChild(myName); -> HTML의 body부분에 요소 삽입
