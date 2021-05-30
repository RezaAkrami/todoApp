// Define variable

let form = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-form__input');
let tasksList = document.querySelector('#task-list');
let clearAllTasks = document.querySelector('clear-all-tasks');

// Add Event Listener when form submited

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let taskItem;

    taskItem = `
    <li class="task-list__item">

                <h2>${taskInput.value}</h2>

                <div class="icons">
                    <a href="#" class="check__icon"><i class="far fa-check-square"></i></a>
                    <a href="#" class="delete__icon"><i class="far fa-trash-alt"></i></a>
                </div>
            </li>
    `
    tasksList.innerHTML+=taskItem;
})
