// Write code related to Home page here 
document.querySelector("form").addEventListener("submit",TodoApp);

let todoArr = JSON.parse(localStorage.getItem("task-list")) || [];

function TodoApp(event){
event.preventDefault();

let task_name = document.querySelector("#name").value
let description = document.querySelector("#desc").value
let start_date = document.querySelector("#start").value
let last_date = document.querySelector("#end").value
let priority = document.querySelector("#priority").value

let taskObj = {
    task_name,
    description,
    start_date,
    last_date,
    priority
};

todoArr.push(taskObj)
localStorage.setItem("task-list",JSON.stringify(todoArr));
}
