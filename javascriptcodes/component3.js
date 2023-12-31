/*
This component is for a simple calculator application. 
It performs basic arithmetic operations on a total value.
*/

class Calculator {
  constructor() {
    // Initialize the total value
    this.total = 0;
  }

  // Add a number to the total
  addNumber(number) {
    // Increase the total by the number
    this.total += number;
  }

  // Subtract a number from the total
  subtractNumber(number) {
    // Decrease the total by the number
    this.total -= number;
  }

  // Multiply the total by a number
  multiplyNumber(number) {
    // Multiply the total by the number
    this.total *= number;
  }

  // Divide the total by a number
  divideNumber(number) {
    // Divide the total by the number
    this.total /= number;
  }

  // Display the current total
  displayTotal() {
    // Print the current total to the console
    console.log("The current total is: " + this.total);
  }
}

// Example usage of the Calculator component
const myCalculator = new Calculator();
myCalculator.addNumber(5);
myCalculator.multiplyNumber(2);
myCalculator.subtractNumber(3);
myCalculator.divideNumber(2);
myCalculator.displayTotal();
