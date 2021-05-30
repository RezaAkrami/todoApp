// ==== Define variable ====

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
                    <i class="far fa-check-square check__icon"></i>
                    <i class="far fa-trash-alt delete__icon"></i>
                </div>
            </li>
    `
    tasksList.innerHTML+=taskItem;

    // Define the variable after submitting the form
    let checkIcon = document.querySelector('.check__icon');
    let deleteIcon = document.querySelector('.delete__icon');


    // Add Event Listener when The user wants to check the task
    checkIcon.addEventListener('click',(e)=>{           
        e.target.classList.toggle('checked');
    })
})