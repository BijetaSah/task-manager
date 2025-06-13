"use strict";
//  SELECTING ELEMENTS
const addBtn = document.querySelectorAll(".add-btn");
const inputbox = document.querySelector(".input-task");
// const listContainer= document.querySelector()
const todoContainer = document.querySelector(".task-todo");
const progressContainer = document.querySelector(".task-in-progress");
const finishedContainer = document.querySelector(".task-finished");
const preventing = (e) => e.preventDefault();

// WRITING FUNCTION FOR DRAG FEATURE
const dragFeature = function (e) {
  let selected = e.target;
  todoContainer.addEventListener("dragover", preventing);
  todoContainer.addEventListener("drop", function () {
    todoContainer.querySelector(".todo-lists").appendChild(selected);
    // selected = null;
  });
  progressContainer.addEventListener("dragover", preventing);
  progressContainer.addEventListener("drop", function () {
    progressContainer.querySelector(".todo-lists").appendChild(selected);
    // selected = null;
  });

  finishedContainer.addEventListener("dragover", preventing);
  finishedContainer.addEventListener("drop", function () {
    finishedContainer.querySelector(".todo-lists").appendChild(selected);
    // selected = null;
  });
};

// CREATING FUNCTION FOR ADDING TODO
const addTodo = function (e) {
  const input = document.querySelector("input");
  if (!input.value) return;
  const parentElement = e.target.closest(".tasks").querySelector(".todo-lists");
  const html = `
  <li class='lists' draggable=true>
  <p class="todo-name">${input.value}</p>
  <p class="time">1 day ago</p>
  </li>
  `;
  parentElement.insertAdjacentHTML("afterbegin", html);
  input.value = "";
  const lists = document.querySelectorAll(".lists");
  lists.forEach((list) => {
    list.addEventListener("dragstart", dragFeature);
  });
};
addBtn.forEach((btn) => {
  btn.addEventListener("click", addTodo);
});
// if (!lists) return;
