// import module for DOM-related stuff and CSS
import "./styles.css";
import { compareAsc, format } from "date-fns";
import DOMUtils from "./dom.js";
const DATEFORMAT = "yyyy-MM-dd"

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
TestProject.addTask("Nap", "1h", format(new Date(2025, 8, 8), DATEFORMAT), "normal")
TestProject.addTask("Beauty Sleep", "description", format(new Date(2025, 9, 15), DATEFORMAT), "high")
DOMUtils.appendProjectToDOM(TestProject)

let testprojectelement = document.querySelector(".project")
TestProject.tasks.forEach((task) => DOMUtils.appendTaskToProject(task, testprojectelement))


/// project will be paused for now
// i will make a new attempt in the future
// possible inspiration from: <https://2007mk.github.io/taskify/>