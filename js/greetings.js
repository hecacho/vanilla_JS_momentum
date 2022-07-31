const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");

const CLASSNAME_HIDDEN = "hidden";

//함수 모음
function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", loginInput.value);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  showGreeting();
}
function showGreeting() {
  const username = localStorage.getItem("username");
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

//사이트 새로고침시 저장해둔 username값이 없다면 입력창을, 있다면 greeting화면을 보여줌
if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  showGreeting();
}
