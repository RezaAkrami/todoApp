// ==== Define variable ====

let form = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-form__input');
let tasksList = document.querySelector('#task-list');
let clearAllTasks = document.querySelector('clear-all-tasks');

// Add Event Listener when form submited
form.addEventListener('submit',(e)=>{
    e.preventDefault();

// Add task to the list item
    let taskItem = `
    <li class="task-list__item">

                <h2>${taskInput.value}</h2>

                <div class="icons">
                <a href="#" class=""><i class="far fa-check-square check__icon"></i></a>
                <a href="#" class="delete__icon"><i class="far fa-trash-alt "></i></a>
                </div>
            </li>
    `
    tasksList.innerHTML+=taskItem;  
})

// Add Event Listener when The user wants to delete or Check the task
tasksList.addEventListener('click',(e)=>{

    e.target.classList.toggle('checked');

    if(e.target.parentElement.classList.contains('delete__icon')){

        e.target.parentElement.parentElement.parentElement.remove();

    }
})