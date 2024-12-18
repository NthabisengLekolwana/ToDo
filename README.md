��#   T o D o 

Task Manager
This project provides a simple task management application that allows users to add, mark, and delete tasks, with data persistence via localStorage. The tasks are stored in the browser's local storage, ensuring that they persist even after the page is reloaded.

Features
Add tasks via an input field and button.
Mark tasks as completed using a checkbox.
Delete tasks.
The state of the tasks is saved in localStorage, ensuring persistence across page reloads.
Installation
To use this application, simply include the HTML, CSS, and JavaScript files in your project. There is no external library or server setup required.
 How It Works
Adding a Task:
When the user types a task name in the input field and clicks the "Add Task" button (or presses enter), a new task is added to the list. If the task input is empty, nothing happens. The task is saved in the browser's localStorage to persist across page reloads.

Marking Tasks as Complete:
Each task has a checkbox that the user can click to mark the task as completed. When checked, the task label is styled with a line-through to indicate completion.

Deleting a Task:
Each task has a delete button (×) that allows users to remove the task from the list. The task is also removed from localStorage to keep the stored data in sync.

Persistence:
When the page loads, all saved tasks from localStorage are loaded and displayed on the page, ensuring persistence even after a browser refresh.

Dependencies
None. This project uses vanilla JavaScript, HTML, and CSS.
Contributing
Feel free to fork the repository and submit pull requests if you'd like to contribute! You can enhance the UI, add more features like task categories or priorities, or improve code performance.

License
This project is open source and available under the MIT License.
                     <br>

Please use this deployment link: 

https://todo-list-j8wn.onrender.com/




 
