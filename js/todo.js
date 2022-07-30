const toDoForm = document.querySelector("#todo-form");
const toDoFormInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

function paintToDo(newToDo) {
  //todo리스트에 새로 추가할 newLi의 틀 생성
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtnDel = document.createElement("input");
  newBtnDel.type = "submit";
  newBtnDel.value = "x";
  newLi.append(newSpan);
  newLi.append(newBtnDel);
  //newBtnDel에 리스트 삭제를 담당할 이벤트리스너 추가
  newBtnDel.addEventListener("click", onClickBtnDel);
  //newLi에 값 할당
  newSpan.innerText = newToDo;
  //todo리스트에 newLi를 삽입
  toDoList.append(newLi);
}

function onSubmitToDoList(event) {
  event.preventDefault();
  const newToDo = toDoFormInput.value;
  toDoFormInput.value = "";
  paintToDo(newToDo);
}

function onClickBtnDel(event) {
  const li = event.target.parentNode;
  li.remove();
  //toDoListArray에서도 값 삭제
}

toDoForm.addEventListener("submit", onSubmitToDoList);

//새로고침해도 데이터 저장
//x버튼을 눌러 todolist 삭제
