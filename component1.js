import React, { useState } from "react";

// A simple functional component in React.
const SimpleComponent = () => {
  // Using React hooks to manage state.
  const [count, setCount] = useState(0);

  /* 
This code is very good, but it can be
improved significantly. I think there should be some condition
checks to ensure everything works properly. Also, some variables
need to be renamed for better understandability. Its very
confusing when you read it for the first time,
but it gets easier as you become more familiar. 
*/

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

export default SimpleComponent;
