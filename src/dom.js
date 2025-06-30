// all DOM-related functions will be put here
const DOMUtils = {
    container : document.querySelector(".container"),

    appendToContainer(project) {
        let projectElement = document.createElement("div") 
        projectElement.setAttribute("class", "project")
        projectElement.textContent = project.title
        DOMUtils.container.appendChild(projectElement)
    },

    appendToProject(task, projectElement) {
        let taskElement = document.createElement("div")
        taskElement.setAttribute("class", "task")
        taskElement.textContent = `${task.title} 
                                    | ${task.description} 
                                    | ${task.dueDate} 
                                    | ${task.priority}.`
        projectElement.appendChild(taskElement)
    }
}

export default DOMUtils;