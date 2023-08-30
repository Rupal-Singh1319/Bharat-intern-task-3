// Sample data structure
const projects = [];
const tasks = [];

// DOM elements
const projectForm = document.getElementById("add-project-form");
const taskForm = document.getElementById("add-task-form");
const projectList = document.getElementById("project-list");
const taskList = document.getElementById("task-list");

// Event listeners
projectForm.addEventListener("submit", addProject);
taskForm.addEventListener("submit", addTask);

// Functions
function addProject(event) {
    event.preventDefault();
    const projectName = document.getElementById("project-name").value;
    if (projectName) {
        const project = { id: Date.now(), name: projectName };
        projects.push(project);
        projectList.innerHTML = renderProjects();
        projectForm.reset();
    }
}
function addTask(event) {
    event.preventDefault();
    const taskName = document.getElementById("task-name").value;
    if (taskName) {
        const task = { id: Date.now(), name: taskName, completed: false };
        tasks.push(task);
        taskList.innerHTML = renderTasks();
        taskForm.reset();
    }
}

function toggleTaskStatus(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        taskList.innerHTML = renderTasks();
    }
}

function renderProjects() {
    return projects
        .map(project => `
            <div class="project-card">
                <h3>${project.name}</h3>
            </div>
        `)
        .join("");
}

function renderTasks() {
    return tasks
        .map(task => `
            <li class="${task.completed ? 'completed' : ''}">
                <span>${task.name}</span>
                <button class="toggle-btn" onclick="toggleTaskStatus(${task.id})">
                    ${task.completed ? 'Undo' : 'Done'}
                </button>
            </li>
        `)
        .join("");
}

// Initial rendering
projectList.innerHTML = renderProjects();
taskList.innerHTML = renderTasks();