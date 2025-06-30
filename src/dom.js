// all DOM-related functions will be put here
const DOMUtils = {
    container : document.querySelector(".container"),

    appendToContainer(project) {
        // format project into new DOM-element
        let projectElement = document.createElement("div") 
        projectElement.setAttribute("class", "project")
        projectElement.textContent = project.title
        // select container to add to
        // add element to selected container
        DOMUtils.container.appendChild(projectElement)
    },

    appendToProject(task, projectElement) {
        // format task into new DOM-element
        // select project
        // add element to selected project
    }
}

export default DOMUtils;