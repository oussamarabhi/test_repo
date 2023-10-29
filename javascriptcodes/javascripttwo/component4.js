/*
This is the component for a simple to-do list application. 
It allows users to add, remove, and display items in the list.
*/

class ToDoList {
  constructor() {
    // Initialize the list array
    this.list = [];
  }

  // Add a new item to the list
  addItem(item) {
    // Push the item to the list array
    this.list.push(item);
  }

  // Remove an item from the list
  removeItem(item) {
    // Find the index of the item in the list
    const index = this.list.indexOf(item);
    // If the item exists, remove it from the list
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  // Display all the items in the list
  displayItems() {
    // Loop through each item in the list
    this.list.forEach((item) => {
      // Print each item to the console
      console.log(item);
    });
  }
}

// Example usage of the ToDoList component
const myList = new ToDoList();
myList.addItem("Task 1");
myList.addItem("Task 2");
myList.displayItems();
myList.removeItem("Task 1");
myList.displayItems();
