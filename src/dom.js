// all DOM-related functions will be put here
const DOMUtils = {
    container : document.querySelector(".container"),
    sidebar : document.querySelector(".sidebar"),

    appendProjectToDOM(project) {
        let projectElement = document.createElement("div") 
        projectElement.setAttribute("class", "project")
        projectElement.textContent = project.title
        DOMUtils.container.appendChild(projectElement)

        let projectBtn = document.createElement("button")
        projectBtn.addEventListener("click", DOMUtils.displaySingleProject)
        // need to create sidebar button that when clicked
        // displays only the tasks associated with the project
    },

    appendTaskToProject(task, projectElement) {
        let taskElement = document.createElement("div")
        taskElement.setAttribute("class", "task")
        taskElement.textContent = `${task.title} 
                                    | ${task.description} 
                                    | ${task.dueDate} 
                                    | ${task.priority}.`
        projectElement.appendChild(taskElement)
    },

    displaySingleProject(project) {
        DOMUtils.container.textContent = ""
        // add projects, should come from the backend
    }
}

export default DOMUtils;