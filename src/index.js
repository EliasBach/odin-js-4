// import module for DOM-related stuff and CSS
import "./styles.css";

// Factory function for creating a project
function Project(title) {
  return {
    title: title,
    tasks: [],
    addTask: function (Task) {
      this.tasks.push(Task)
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

console.table(allProjects)









// _______________________________________________________
// Factory Function Template
function createObject(param1, param2) {
    // Private variables
    let privateVar = 'private data';
    
    // Private function
    function privateFunction() {
      return `Accessing ${privateVar}`;
    }
    
    // Return object with public interface
    return {
      // Public properties
      publicProp1: param1,
      publicProp2: param2,
      
      // Public function
      publicFunction() {
        return `Public: ${this.publicProp1}`;
      },
      
      // Public function that uses private members
      usePrivate() {
        return privateFunction();
      }
    };
  }
  
  // Usage
  // const obj = createObject('value1', 'value2');
  // console.log(obj.publicFunction()); // "Public: value1"
  // console.log(obj.usePrivate());     // "Accessing private data"