const toDoForm = document.querySelector("#todo-form");
const toDoFormInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

const toDoListArray = [];

function paintToDo(newToDo) {
  //todo리스트에 새로 추가할 newLi의 틀 생성
  const newLi = document.createElement("li");
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newBtnDel = document.createElement("input");
  newBtnDel.type = "submit";
  newBtnDel.value = "x";
  newLi.append(newDiv);
  newDiv.append(newSpan);
  newDiv.append(newBtnDel);
  //newLi에 값 할당
  newSpan.innerText = newToDo;
  //todo리스트에 newLi를 추가
  toDoList.append(newLi);
  //todo리스트 저장,로드에 사용할 toDoListArray배열 업데이트
  toDoListArray.push(newToDo);
  console.log(toDoListArray);
  console.log(typeof toDoListArray);
}

function onSubmitToDoList(event) {
  event.preventDefault();
  const newToDo = toDoFormInput.value;
  toDoFormInput.value = "";
  paintToDo(newToDo);
}

function onload() {
  const listSaveSize = localStorage.getItem("listSaveSize");
  for (let i = 0; i < listSaveSize; i++) {
    const tmp = localStorage.getItem(`listSave${i}`);
    paintToDo(tmp);
  }
}

function onUnload() {
  localStorage.setItem("listSaveSize", toDoListArray.length);
  for (let i = 0; i < toDoListArray.length; i++) {
    localStorage.setItem(`listSave${i}`, toDoListArray[i]);
  }
}

window.addEventListener("load", onload);
window.addEventListener("unload", onUnload);
toDoForm.addEventListener("submit", onSubmitToDoList);

//새로고침해도 데이터 저장
//x버튼을 눌러 todolist 삭제
