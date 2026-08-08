const taskInputField = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

let editTodoId = null;


function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}


function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}


function renderTodos() {
    const todos = getTodos();

    todoList.innerHTML = "";

    todos.forEach((todo) => {

        const li = document.createElement("li");
        todo.isCompleted ? li.className = "completed" : ""

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-checkbox";
        checkbox.addEventListener('change', (e) => toggleIsCompleted(e, todo.id))
        checkbox.checked = todo.isCompleted;


        const span = document.createElement("span");
        span.textContent = todo.todo;


        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";

        editButton.addEventListener("click", () => {
            startEdit(todo.id);
        });


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", () => {
            deleteTodo(todo.id);
        });


        li.append(
            checkbox,
            span,
            editButton,
            deleteButton
        );


        todoList.appendChild(li);
    });
}


function addTodo(text) {

    const todos = getTodos();

    const newTodo = {
        id: Date.now(),
        todo: text,
        isCompleted: false
    };


    const updatedTodos = [
        ...todos,
        newTodo
    ];


    saveTodos(updatedTodos);

    renderTodos();
}



function deleteTodo(id) {

    const todos = getTodos();

    const updatedTodos = todos.filter(
        todo => todo.id !== id
    );


    saveTodos(updatedTodos);

    renderTodos();
}



function startEdit(id) {

    const todos = getTodos();

    const todo = todos.find(
        todo => todo.id === id
    );


    taskInputField.value = todo.todo;

    editTodoId = id;

    addTodoButton.textContent = "Update";
}



function updateTodo(id) {

    const text = taskInputField.value.trim();

    if (text === "") return;


    const todos = getTodos();


    const updatedTodos = todos.map((todo) => {

        if (todo.id === id) {
            return {
                ...todo,
                todo: text
            }

        }

        return todo


    });

    console.log(updatedTodos);


    saveTodos(updatedTodos);

    resetForm();

    renderTodos();
}

function resetForm() {

    taskInputField.value = "";

    editTodoId = null;

    addTodoButton.textContent = "Add Task";
}

function toggleIsCompleted(e, id) {
    const state = e.target.checked

    const todos = getTodos()

    const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                isCompleted: state
            }
        }

        return todo
    })

    saveTodos(updatedTodos)
    renderTodos()
}

addTodoButton.addEventListener("click", (e) => {

    e.preventDefault();


    if (editTodoId) {

        updateTodo(editTodoId);

    } else {

        const text = taskInputField.value.trim();

        if (text === "") return;


        addTodo(text);

        resetForm();
    }

});


renderTodos();