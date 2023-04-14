window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list = document.querySelector("#tasks");


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const todo = input.value;

        if(!todo){
            alert("Please fill My To-Do List Entry");
            return
        }

        const todoList = document.createElement("div");
        todoList.classList.add("task");

        const todoContent = document.createElement("div");
        todoContent.classList.add("content");

        todoList.appendChild(todoContent);

        const todoInput = document.createElement("input");
        todoInput.classList.add("text");
        todoInput.type = "text";
        todoInput.value = todo;
        todoInput.setAttribute("readonly", "readonly");

        todoContent.appendChild(todoInput);

        const todoActions = document.createElement("div");
        todoActions.classList.add("actions");

        const todoEdit = document.createElement("button");
        todoEdit.classList.add("edit");
        todoEdit.innerHTML = ("Edit");

        const todoDelete = document.createElement("button");
        todoDelete.classList.add("delete");
        todoDelete.innerHTML = ("Delete");

        todoActions.appendChild(todoEdit);
        todoActions.appendChild(todoDelete);

        todoList.appendChild(todoActions);

        list.appendChild(todoList)

        input.value = "";

        todoEdit.addEventListener('click', () =>{
            if( todoEdit.innerText.toLowerCase() == "edit"){
                todoInput.removeAttribute("readonly");
                todoInput.focus();
                todoEdit.innerText ="Save";
            }else{
                todoInput.setAttribute("readonly", "readonly");
                todoEdit.innerText = "Edit";
            }
        });

        todoDelete.addEventListener('click', () => {
            list.removeChild(todoList);
        });

    })


});