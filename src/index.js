// import module for DOM-related stuff and CSS
import "./styles.css";
import DOMUtils from "./dom.js";

// Factory function for creating a project
function Project(title) {
  return {
    title: title,
    tasks: [],
    addTask: function(title, description, dueDate, priority) {
      this.tasks.push(Task(title, description, dueDate, priority))
      return this.tasks
    }
  }
}

// function to addProjects to in-memory array storage
// call this function to create projects, to ensure they are stored
let allProjects = []
function addProject(title) {
  let newproject = Project(title)
  console.log("Project: ", title, " has been created.")
  allProjects.push(newproject)
  return newproject
}

// Factory function for creating a task
function Task(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority
  }
}

// Testing Code
const TestProject = addProject("Sleep")
TestProject.addTask("Nap", "1h", "00-00-00", "normal")
TestProject.addTask("Beauty Sleep", "2-3h", "00-00-00", "high")
DOMUtils.appendToContainer(TestProject)

let testprojectelement = document.querySelector(".project")
TestProject.tasks.forEach((task) => DOMUtils.appendToProject(task, testprojectelement))