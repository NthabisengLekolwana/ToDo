// Select the necessary elements
const A = document.getElementById('task-area');
const B = document.getElementById('single-task');
const C = document.getElementById('tasks');

// Function to add a task
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    // Get the task name from the input field
    const taskName = B.value; // Assuming B is the input field

    if (taskName === '') return; // If the input is empty, don't do anything

    // Create the task element
    const newTask = createTask(taskName);

    // Append the new task to the task list (C in this case)
    C.appendChild(newTask);

    // Clear the input field after adding the task
    B.value = '';
}

// Function to create a task element
function createTask(taskName) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
        <input type="checkbox">
        <label>${taskName}</label>
        <span class="delete">&times;</span>
    `;

    // Add event listener for deleting the task
    const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener('click', deleteTask);

    return task;
}

// Function to delete a task
function deleteTask(event) {
    event.target.parentElement.remove(); // Remove the parent task element
}

// Attach event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', addTask);

app.get('/about', (req, res) => {
    res.send('About us');
  });
  
  app.get('/contact', (req, res) => {
    res.send('Contact us at: contact@example.com');
  });
  
