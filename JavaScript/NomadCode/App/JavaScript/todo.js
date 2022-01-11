const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); 2와 같다.
const toDoList = document.querySelector("#todo-list");


function handleToDoSubmit(event){
    event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value="";
        paintToDo(newTodo);
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function deleteToDo(event){
    const li = event.target.parentElement; // event.target["parentElement"]도 가능
    li.remove();
}


    
    


toDoForm.addEventListener("submit",handleToDoSubmit);