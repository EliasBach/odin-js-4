import "./styles.css";

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
  const obj = createObject('value1', 'value2');
  console.log(obj.publicFunction()); // "Public: value1"
  console.log(obj.usePrivate());     // "Accessing private data"