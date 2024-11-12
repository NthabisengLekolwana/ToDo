// Select the necessary elements
//const A = document.getElementById('task-area');
const B = document.getElementById('single-task');
const C = document.getElementById('tasks');

function loadTasks() {
    // Get tasks from localStorage (if any)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Loop through the tasks and display them
    tasks.forEach(task => {
        const newTask = createTask(task.name, task.completed);
        C.appendChild(newTask);
    });
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = [];
    // Get all tasks from the list
    const taskElements = C.querySelectorAll('li.task');
    
    taskElements.forEach(task => {
        const taskName = task.querySelector('label').textContent;
        const isCompleted = task.querySelector('input').checked;
        tasks.push({ name: taskName, completed: isCompleted });
    });

    // Save the tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    // Get the task name from the input field
    const taskName = B.value; // Assuming B is the input field

    if (taskName === '') return; // If the input is empty, don't do anything

    // Create the task element
    const newTask = createTask(taskName,false);

    // Append the new task to the task list (C in this case)
    C.appendChild(newTask);

    saveTasks();

    // Clear the input field after adding the task
    B.value = '';
}

// Function to create a task element
function createTask(taskName, completed) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
        <input type="checkbox" ${completed ? 'checked' : ''}>
        <label>${taskName}</label>
        <span class="delete">&times;</span>
    `;

    // Add event listener for task completion toggle
    const checkbox = task.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', toggleTaskCompletion);


    // Add event listener for deleting the task
    const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener('click', deleteTask);

    return task;
}

// Function to delete a task
function deleteTask(event) {
    event.target.parentElement.remove(); // Remove the parent task element
    saveTasks();
}

function toggleTaskCompletion(event) {
    const task = event.target.parentElement; // Get the parent task <li>
    const label = task.querySelector('label'); // Find the label element

    // Toggle the completed class to mark the task as completed
    if (event.target.checked) {
        label.style.textDecoration = 'line-through'; // Strike-through the task label
    } else {
        label.style.textDecoration = 'none'; // Remove the strike-through when unchecked
    }
    saveTasks();
}

// Attach event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', addTask);

// Load the tasks from localStorage when the page loads
window.addEventListener('load', loadTasks)


// Attach event listener to the form
//const form = document.querySelector('form');
//form.addEventListener('submit', addTask);

//app.get('/about', (req, res) => {
  //  res.send('About us');
  //});
  
  //app.get('/contact', (req, res) => {
   // res.send('Contact us at: contact@example.com');
 // });
  
