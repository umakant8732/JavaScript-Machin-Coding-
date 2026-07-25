/**
 * Problem 1: Event Delegation
 * 
 * 1. Implement task adding logic when clicking the "Add Task" button.
 * 2. Implement task deletion logic using Event Delegation. 
 *    - Attach ONLY ONE click event listener on the parent element ('#task-list').
 *    - Detect if the clicked target is the delete button ('button.btn-delete') and remove the task item accordingly.
 */

const taskInputField = document.getElementById('task-input')
const taskAddButton = document.getElementById("btn-add")
const taskList = document.getElementById("task-list")

taskAddButton.addEventListener('click', (e) => {

    const taskText = taskInputField.value.trim()

    if (!taskText) return

    const li = document.createElement('li')
    li.className = 'task-item'

    const span = document.createElement('span')
    // span.innerHTML = taskText never do this one
    span.textContent = taskText

    const deleteButton = document.createElement('button')
    deleteButton.className = 'btn-delete'
    deleteButton.textContent = 'Delete'

    li.appendChild(span)
    li.appendChild(deleteButton)

    taskList.appendChild(li);
    taskInputField.value = ""

})

taskList.addEventListener('click', (e) => {

    if (e.target.classList.contains('btn-delete')) {
        e.target.parentElement.remove()
    }
})



// const deleteButtons = document.querySelectorAll('.btn-delete')

// console.log(deleteButtons);

// deleteButtons.forEach((btn) => {
//     btn.addEventListener('click', function (e) {

//         e.target.parentElement.remove()

//         // console.dir(e.target);  -> e object ki saare properties dekh sakte hai
//     })
// })

