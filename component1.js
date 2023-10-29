import React, { useState } from "react";

// A simple functional component in React.
const SimpleComponent = () => {
  // Using React hooks to manage state.
  const [count, setCount] = useState(0);

  // Function for incrementing the count
  const increment = () => {
    setCount(count + 1); // Incrementing the count by 1
  };

  // Function decreases the count.
  const decrement = () => {
    setCount(count - 1); // Decrementing the count by 1
  };
  return (
    // JSX code for the component
    <div>
      <p>Count: {count}</p> {/* Displays the current count */}
      <button onClick={increment}>Increment</button>{" "}
      {/* Button for incrementing the count */}
      <button onClick={decrement}>Decrement</button>{" "}
      {/* Button for decrementing the count */}
    </div>
  );
};

/* 
This code, is very good, but can be, improved to much better. 
I think, their should be, some conditions checking, to make, sure everything, 
work goodly. Also, some, variables need, to be rename, for more understandability. 
Its, very confusing, when you, read it first time, but gets, easier when, you become familiar. 
*/

export default SimpleComponent;
