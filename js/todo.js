const toDoForm = document.querySelector("#todo-form");
const toDoFormInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

function paintToDo(newToDo) {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.innerText = newToDo;
  newLi.append(newSpan);
  toDoList.append(newLi);
}

function onSubmitToDoList(event) {
  event.preventDefault();
  const newToDo = toDoFormInput.value;
  toDoFormInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", onSubmitToDoList);
